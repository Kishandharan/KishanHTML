function func1(){
    console.log("Something has happend");
}

function func2(){
    console.log("Aneesh has happend");
    func3()
}

function func3(){
    func2()
}

func3()
