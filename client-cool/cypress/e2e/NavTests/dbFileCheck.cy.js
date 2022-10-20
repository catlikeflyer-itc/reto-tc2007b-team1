import './Log.cy.js';
import './RandomFile.cy.js';

describe('File Creation Check', () => {
    it('Checks if the file was indeed created and saved', () => {
            cy.contains('Generar expediente').click();
            let areas = ['Legal','Penal','Jurídica','Laboral'];
            let tipos = ['Amparo','Laboral','Civil','Juicios de nulidad','Acción pública','Lesividad'];
            let estatus = ['En proceso','Finalizado'];

            let ra = Math.floor(Math.random() * areas.length);
            let rt = Math.floor(Math.random() * tipos.length);
            let re = Math.floor(Math.random() * estatus.length);

            const names = ['Andriu','Juang','Doo','Elimiano','Deigo','Mijel','Andre'];

            const s = Math.floor(Math.random() * 7);
            let type1 = `${names[s]} is very lazy ${(Math.floor(1 + Math.random() * 1000) * Math.floor(1 + Math.random() * 1000))}`;
            const nFile = Math.floor(1 + Math.random() * 99000).toString()
            cy.get('#Expediente').should('exist').type(nFile);
            cy.get('#Título').should('exist').type(type1.toString());
            cy.get('#Descripción').should('exist').type(`${names[s]} is sometimes lazy`);

            cy.get('select[id="Área"]').should('exist').select(areas[ra]);
            cy.get('select[id="Asunto"]').should('exist').select(tipos[rt]);
            cy.get('select[id="Estatus"]').should('exist').select(estatus[re]);

            cy.contains('Crear expediente').click();
            cy.contains('Buscar').click();
            if(areas[ra] == 'Jurídica') cy.contains("Juridica").click();
            else cy.contains(areas[ra]).click();
            cy.contains(nFile).should('be.visible', {timeout: 3000});
            cy.go('back');
     
    });
});

        



