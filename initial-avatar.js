'use strict';

import {LitElement, html} from '@polymer/lit-element';

class InitialAvatar extends LitElement {

  // Public property API that triggers re-render (synced with attributes)
  static get properties() {
    return {
      initial: String,
      circle: Boolean
    }
  }

  constructor() {
    super();
    //this.initial = 'a';
    //this.circle = false;
  }

  _render({initial, circle}) {
    let shapeClass = "square"
    if(this.hasAttribute("circle")) {
      shapeClass = "circle";
    }
    return html`
      <style>
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
        .a {background-color: var(--a-bg-color, #E57373);}
        .b {background-color: var(--b-bg-color, #7986CB);}
        .c {background-color: var(--c-bg-color, #64B5F6);}
        .d {background-color: var(--d-bg-color, #4DB6AC);}
        .e {background-color: var(--e-bg-color, #388E3C);}
        .f {background-color: var(--f-bg-color, #FFB74D);}
        .g {background-color: var(--g-bg-color, #FF8A65);}
        .h {background-color: var(--h-bg-color, #A1887F);}
        .i {background-color: var(--i-bg-color, #E0E0E0);}
        .j {background-color: var(--j-bg-color, #90A4AE);}
        .k {background-color: var(--k-bg-color, #E57373);}
        .l {background-color: var(--l-bg-color, #7986CB);}
        .m {background-color: var(--m-bg-color, #64B5F6);}
        .n {background-color: var(--n-bg-color, #4DB6AC);}
        .o {background-color: var(--o-bg-color, #388E3C);}
        .p {background-color: var(--p-bg-color, #FFB74D);}
        .q {background-color: var(--q-bg-color, #FF8A65);}
        .r {background-color: var(--r-bg-color, #A1887F);}
        .s {background-color: var(--s-bg-color, #E0E0E0);}
        .t {background-color: var(--t-bg-color, #90A4AE);}
        .u {background-color: var(--u-bg-color, #E57373);}
        .v {background-color: var(--v-bg-color, #7986CB);}
        .w {background-color: var(--w-bg-color, #64B5F6);}
        .x {background-color: var(--x-bg-color, #4DB6AC);}
        .y {background-color: var(--y-bg-color, #388E3C);}
        .z {background-color: var(--z-bg-color, #FFB74D);}
      </style>
      <div id="initial" class$="default ${initial} ${shapeClass}">${initial}</div>
    `;
  }

}
customElements.define('initial-avatar', InitialAvatar);
