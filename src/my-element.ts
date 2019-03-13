import { LitElement, html, customElement, property } from 'lit-element';

@customElement('my-element')
export class MyElement extends LitElement {
    @property()
    foo = {
        "firstName" : "Jayce",
        "LastName":"Hauck",
        "username":"Domen_qwe",
        "email":"123"
    };
    render() {
        return html`
        <style>
        .s1{color:red;}
        .s2{color:orange;}
        .s3{color:blue;}
        </style>
        <h1 class ="s1">${this.foo.firstName}</h1>
        <h2 class ="s2">${this.foo.LastName}</h2>
        <h3 class ="s3">${this.foo.email}</h3>
        `;
    }

    firstUpdated(changedProperties:any) {
        changedProperties.forEach((oldValue:any , propName:any) => {
          console.log(`${propName} changed. oldValue: ${oldValue}`);
        });
        fetch('api/user')
            .then((response) => response.json())
            .then((bodyRes) => this.foo = bodyRes);

    }
}
