import { LitElement, html } from 'lit-element';

class MyElement extends LitElement {
 static get properties(){
   return{
     mystyle:{type: String}
   };
 }
 constructor(){
   super();
   this.mystyle = 's1';
 }
 handleClick(){
   this.mystyle = 's2'
 }
  render(){
    
    return html`
      <style>
      .s1{
        color:green;
        font-size:24px;
      }
      .s2{
        color:purple;
      }
      </style>
      <!--temlate content-->
          <p class=${this.mystyle}>A
          paragraph ${this.mystyle}</p>
          <button @click="${this.handleClick}">click
          me</button>
       
    `;
  }
}
customElements.define('my-element', 
MyElement);