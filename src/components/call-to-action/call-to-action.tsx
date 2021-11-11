/* eslint-disable no-trailing-spaces */
/* eslint-disable class-methods-use-this */
import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'call-to-action',
  styleUrl: 'call-to-action.scss',
  shadow: true,
})

export class CallToAction {
  @Prop() isopen: boolean;

  private handleClose = () => {
    this.isopen = false;
  }

  private handleOpen = () => {
    this.isopen = true;
  }

  render() {
    return (
      <div class="container">
        <div class="headline-container">
          <h1>CtA - Main conversion</h1>
        </div>

        <div class="hero-container">
          <div class="cta-container">
            <h2 class="cta-title">A wonderful serenity has taken possessio</h2>
            <p class="cta-description">A wonderful serenity has taken possession of my entire soul, like these seet mo</p>
           
            <button class="cta-button" onClick={() => this.handleOpen()}>Link button</button>
          </div>
          <div class="image-container">
            <img src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" alt="an office room with a palmtree, long table and a laptop on it" />
          </div>
        </div>

        <div class={this.isopen ? 'contact-container is-open' : 'contact-container'}>
          <h2 class="contact-title">Contact us</h2>
          <div class="contact-close-btn" onClick={() => this.handleClose()}>
          </div>
        </div>
      </div>
      
    );
  }
}
