import './FileGen.cy.js';

Cypress.Commands.add('rFile', (n) => {
        let areas = ['Legal','Penal','Jurídica','Laboral'];
        let tipos = ['Amparo','Laboral','Civil','Juicios de nulidad','Acción pública','Lesividad'];
        let estatus = ['En proceso','Finalizado'];
        let area = "";
        let tipo = "";
        let est = "";
        for(let i = 0; i < n; i++){
            let ra = Math.floor(Math.random() * areas.length);
            let rt = Math.floor(Math.random() * tipos.length);
            let re = Math.floor(Math.random() * estatus.length);
            cy.contains('Generar expediente').click();
            cy.Create(areas[ra],tipos[rt],estatus[re]);
            cy.go('back');
            area = areas[ra];
            tipo = tipos[rt];
            est = estatus[re];
        }
        return [area, tipo , est];
});


