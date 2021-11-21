const questions = [
    "O que eu aprendi hoje?",
    "O que me deixou aborrecido? E o que eu poderia fazer para melhorar?",
    "O que me deixou feliz hoje?",
    "Quantas pessoas eu ajudei hoje",
]
//() => função asyncrona 
const ask = ( index = 0 ) => {
    //rocess.stdout.write -saída padrão do objeto
    process.stdout.write("\n" + questions[index] + " > ")
}

//(2) - posições/pergutas
ask()


const answers = []
//on fica ouvindo eventos
process.stdin.on('data', data =>{
    answers.push(data.toString().trim() + '\n')
    //if pergunta
    if (answers.length < questions.length){
        ask(answers.length)
    //else - respostas
    } else {
        console.log(answers)
        process.exit()
    }
})

process.on('exit', () => {
    console.log(`
    
    Bacana João!
    
    
    O que você aprendeu hoje foi:
    ${answers[0]}
    
    O que te aborreceu e você poderia melhorar foi:
    ${answers[1]}

    O que te deixou feliz hoje:
    ${answers[2]}

    Você ajudou ${answers[3]} pessoas hoje!!
    
    
    Volte amanha para novas reflexões!!
    `)
})