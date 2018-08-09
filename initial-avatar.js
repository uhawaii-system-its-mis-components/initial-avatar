'use strict';

import {LitElement, html} from '@polymer/lit-element';

class InitialAvatar extends LitElement {

  static get properties() {
    return {
      initial: String,
      circle: Boolean
    }
  }

  constructor() {
    super();
  }

  _render({initial, circle}) {
    let shapeClass = "square"
    if(this.hasAttribute("circle")) {
      shapeClass = "circle";
    }
    return html`
      <style>
        :host {
          display: block;
        }
        #initial {
          color: rgba(256, 256, 256, .7);
          text-transform: uppercase;
          display: flex;
          flex-direction: row;
          height: 100%;
          align-items: center;
          justify-content: center;
          @apply(--initial-style);
          @apply(--paper-font-display4);
          font-size: var(--inital-avatar-font-size, 24px);
        }
        .circle {
          border-radius: 50%;
        }
        /* The .default needs to appear first so it gets overriden by the other rules */
        .default {background-color: var(--bg-color, #E57373);}
        .a, .A {background-color: var(--a-bg-color, #E57373);}
        .b, .B {background-color: var(--b-bg-color, #7986CB);}
        .c, .C {background-color: var(--c-bg-color, #64B5F6);}
        .d, .D {background-color: var(--d-bg-color, #4DB6AC);}
        .e, .E {background-color: var(--e-bg-color, #388E3C);}
        .f, .F {background-color: var(--f-bg-color, #FFB74D);}
        .g, .G {background-color: var(--g-bg-color, #FF8A65);}
        .h, .H {background-color: var(--h-bg-color, #A1887F);}
        .i, .I {background-color: var(--i-bg-color, #E0E0E0);}
        .j, .J {background-color: var(--j-bg-color, #90A4AE);}
        .k, .K {background-color: var(--k-bg-color, #E57373);}
        .l, .L {background-color: var(--l-bg-color, #7986CB);}
        .m, .M {background-color: var(--m-bg-color, #64B5F6);}
        .n, .N {background-color: var(--n-bg-color, #4DB6AC);}
        .o, .O {background-color: var(--o-bg-color, #388E3C);}
        .p, .P {background-color: var(--p-bg-color, #FFB74D);}
        .q, .Q {background-color: var(--q-bg-color, #FF8A65);}
        .r, .R {background-color: var(--r-bg-color, #A1887F);}
        .s, .S {background-color: var(--s-bg-color, #E0E0E0);}
        .t, .T {background-color: var(--t-bg-color, #90A4AE);}
        .u, .U {background-color: var(--u-bg-color, #E57373);}
        .v, .V {background-color: var(--v-bg-color, #7986CB);}
        .w, .W {background-color: var(--w-bg-color, #64B5F6);}
        .x, .X {background-color: var(--x-bg-color, #4DB6AC);}
        .y, .Y {background-color: var(--y-bg-color, #388E3C);}
        .z, .Z {background-color: var(--z-bg-color, #FFB74D);}
      </style>
      <div id="initial" class$="default ${initial} ${shapeClass}">${initial}</div>
    `;
  }

}
customElements.define('initial-avatar', InitialAvatar);
