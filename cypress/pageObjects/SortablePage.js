import BasePage from "./BasePage";

class SortablePage extends BasePage {

    static get url(){
        return "https://demoqa.com/sortable";
    }

    static getRow(id){
        return cy.get(".vertical-list-container > .list-group-item").eq(id);
    }

    static moveRow(id, byYCord){
        this.getRow(id).trigger('mousedown', {force:true}).trigger('mousemove', { x:0 , y: byYCord, force: true })
        .trigger('mouseup', {force: true});
    }

}


export default SortablePage;