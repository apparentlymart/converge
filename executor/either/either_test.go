package either_test

import (
	"fmt"

	"github.com/asteris-llc/converge/executor/either"
	"github.com/asteris-llc/converge/executor/monad"
)

func toNum(i interface{}) either.EitherM {
	if num, ok := i.(int); ok {
		return either.RightM(num)
	}
	return either.LeftM(i)
}

func addOne(src interface{}) monad.Monad {
	num := src.(int)
	if num == 7 {
		return toNum("seven")
	}
	return toNum(num + 1)
}

func show(a, b either.EitherM) {
	fmt.Println(a)
	fmt.Println(b)
}

func ExampleJoin() {
	a := either.RightM(either.RightM("foo"))
	fmt.Println(a)
	fmt.Println(monad.Join(a))
	a = either.LeftM(either.LeftM("foo"))
	fmt.Println(a)
	fmt.Println(monad.Join(a))
	//Output:
	// {{{{foo}}}}
	// {{foo}}
	// {{{{foo}}}}
	// {{{{foo}}}}

}

func ExampleEither() {
	a := either.RightM(1)
	b := either.LeftM("foo")
	show(a, b)
	a1 := a.AndThen(addOne)
	b1 := b.AndThen(addOne)
	show(a1.(either.EitherM), b1.(either.EitherM))
	//Output:
	// {{1}}
	// {{foo}}
	// {{2}}
	// {{foo}}
}

func ExampleChainAndThen() {
	plusOne := func(i interface{}) interface{} { return 1 + i.(int) }
	a := either.RightM(1).AndThen(addOne).AndThen(addOne).AndThen(addOne)
	fmt.Println(a)
	b := monad.FMap(plusOne, a)
	fmt.Println(b)
	//Output:
	// {{4}}
	// {{5}}
}

func ExampleEitherFMap() {
	plusOne := func(i interface{}) interface{} { return 1 + i.(int) }
	a := either.ReturnM(1)
	b := monad.FMap(plusOne, a)
	fmt.Println(b)
	b = monad.FMap(plusOne, b)
	fmt.Println(b)
	b = monad.FMap(plusOne, b)
	fmt.Println(b)
	//Output:
	// {{2}}
	// {{3}}
	// {{4}}
}
