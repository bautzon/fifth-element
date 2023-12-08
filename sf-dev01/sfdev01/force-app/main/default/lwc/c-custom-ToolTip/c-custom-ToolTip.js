import { LightningElement, api } from "lwc";

export default class CustomToolTip extends LightningElement {
  @api richText;
  isTooltipVisible = false;

  showTooltip() {
    this.isTooltipVisible = true;
    this.template.querySelector(".tooltip-content").innerHTML = this.richText;
  }

  hideTooltip() {
    this.isTooltipVisible = false;
  }
}
