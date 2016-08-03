package extensions

import (
	"fmt"
	"text/template"
)

var languageKeywords = map[string]struct{}{
	"params": {},
	"spilt":  {},
}

func checkKeywordExists(keyword string) bool {
	_, found := languageKeywords[keyword]
	return found
}

type LanguageExtension struct {
	Funcs template.FuncMap
}

func MakeLanguage() *LanguageExtension {
	funcs := template.FuncMap{}
	for keyword := range languageKeywords {
		funcs[keyword] = DoNothing()
	}
	return &LanguageExtension{Funcs: funcs}
}

func (l *LanguageExtension) On(keyword string, action interface{}) *LanguageExtension {
	l.Funcs[keyword] = action
	fmt.Printf("Added a function to %s\n", keyword)
	return l
}

func (l *LanguageExtension) Validate() ([]string, []string, bool) {
	var missing []string
	var extra []string
	ok := true
	for key := range l.Funcs {
		if !checkKeywordExists(key) {
			missing = append(missing, key)
			ok = false
		}
	}
	for key := range languageKeywords {
		if _, found := l.Funcs[key]; !found {
			extra = append(extra, key)
			ok = false
		}
	}
	return missing, extra, ok
}

func DoNothing() interface{} {
	return func(params ...string) (string, error) {
		fmt.Println("Running do-nothing func")
		return "", nil
	}
}

func RegisterExistance(list *[]string, nameIndex int) interface{} {
	return func(params ...string) (string, error) {
		name := params[0]
		*list = append(*list, "param."+name)
		return name, nil
	}
}
