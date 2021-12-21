const template = document.createElement('div');
template.innerHTML = `
    <div class="modal-container">
      <div class="modal-bg"></div>
      <div class="modal">
        <header class="modal-header">
          Are you sure you want to delete?
        </header>

        <div class="modal-body">
          This action cannot be undone
        </div>

        <footer class="modal-footer">
          <button class="button" id="cancelBtn">Cancel</button>
          <button class="button button--action">Delete</button>
        </footer>
      </div>
    </div>
`;

const style = document.createElement('style');
style.textContent = `
  .modal-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
  }

  .modal-bg {
    background: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }

  .modal {
    background-color: white;
    position: absolute;
    z-index: 2;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    overflow: hidden;
    border-radius: 0.5rem;
  }

  .modal-header, .modal-footer {
    background: lightgray;
    padding: 0.5rem;
  }
  
  .modal-body {
    padding: 2rem 0.5rem;
  }

  @media (max-width: 450px) {
    .modal-container {
      
    }
  }
`;

customElements.define(
  'confirmation-modal',
  class ConfirmationModal extends HTMLElement {
    connectedCallback() {
      const shadow = this.attachShadow({ mode: 'open' });

      console.log(shadow);

      this.shadowRoot.append(style, template.cloneNode(true));

      const bg = this.shadowRoot.querySelector('.modal-bg');
      const cancelBtn = this.shadowRoot.querySelector('#cancelBtn');

      console.log(bg);

      cancelBtn.addEventListener('click', (e) => {
        document.body.removeChild(document.querySelector('confirmation-modal'));
      });

      bg.addEventListener('click', (e) => {
        document.body.removeChild(document.querySelector('confirmation-modal'));
      });
    }
  },
);

const deleteBtn = document.querySelector('#deleteBtn');
deleteBtn.addEventListener('click', (e) => {
  const confirmModal = document.querySelector('confirmation-modal');
  if (confirmModal) {
    document.body.removeChild(confirmModal);
  } else {
    document.body.append(document.createElement('confirmation-modal'));
  }
});
