// Muito útil quando sua variável possui valor específico.
const permissoes = "abc" // "professor" || "aluno" || "admin"

switch(permissoes) {
    case "aluno":
        console.log("Você só pode visualizar as aulas.");
        break;
    case "professor":
        console.log("Você pode alterar as aulas e adicionar exercicios.")
        break;
    case "admin":
        console.log("Você pode alterar o que quiser.");
        break;
    default:
        console.log("Não sei quem você é no sistema.");
}