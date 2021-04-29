const ContactForm = () => {
  return (
    <>
      <form id="comp-k67n5qhn" className="_2Jusq">
        <div
          data-mesh-id="comp-k67n5qhninlineContent"
          data-testid="inline-content"
          className=""
        >
          <div
            data-mesh-id="comp-k67n5qhninlineContent-gridContainer"
            data-testid="mesh-container-content"
          >
            <div id="comp-k67n5qia" className="_1FsS0 _36G3j">
              <label for="input_comp-k67n5qia" className="_1qrSw">
                Prénom
              </label>
              <div className="ABx0f" data-children-count="1">
                <input
                  type="text"
                  name="prénom"
                  id="input_comp-k67n5qia"
                  className="_3rh7f has-custom-focus"
                  value=""
                  placeholder=""
                  maxlength="100"
                  data-kwimpalastatus="alive"
                  data-kwimpalaid="1619617232940-0"
                />
              </div>
            </div>
            <div id="comp-kgouzypu" className="_1FsS0 _36G3j" />
            <label for="input_comp-kgouzypu" className="_1qrSw">
              Nom de famille
            </label>
            <div className="ABx0f" data-children-count="1">
              <input
                type="text"
                name="nom-de famille"
                id="input_comp-kgouzypu"
                className="_3rh7f has-custom-focus"
                value=""
                placeholder=""
                maxlength="100"
                data-kwimpalastatus="alive"
                data-kwimpalaid="1619617232940-1"
              />
            </div>
          </div>
          <div id="comp-k67n5qiw" className="_1FsS0 _36G3j _19QH-">
            <label for="input_comp-k67n5qiw" className="_1qrSw">
              E-mail
            </label>
            <div className="ABx0f" data-children-count="1">
              <input
                type="email"
                name="e-mail"
                id="input_comp-k67n5qiw"
                className="_3rh7f has-custom-focus"
                value=""
                placeholder=""
                required=""
                pattern="^.+@.+\.[a-zA-Z]{2,63}$"
                maxlength="250"
                data-kwimpalastatus="alive"
                data-kwimpalaid="1619617232940-2"
              />
            </div>
          </div>
          <div id="comp-k67n5qj01" className="_1FsS0 _36G3j">
            <label for="input_comp-k67n5qj01" className="_1qrSw">
              Téléphone
            </label>
            <div className="ABx0f" data-children-count="1">
              <input
                type="tel"
                name="téléphone"
                id="input_comp-k67n5qj01"
                className="_3rh7f has-custom-focus"
                value=""
                placeholder=""
                maxlength="50"
                data-kwimpalastatus="alive"
                data-kwimpalaid="1619617232940-3"
              />
            </div>
          </div>
          <div
            id="comp-k67n5qj4"
            className="_1VpqH _2uzXQ"
            data-children-count="1"
          >
            <label for="textarea_comp-k67n5qj4" className="lW_XI">
              Laissez-nous un message...
            </label>
            <textarea
              id="textarea_comp-k67n5qj4"
              className="_2Brtg has-custom-focus"
              placeholder=""
            ></textarea>
          </div>
          <div
            id="comp-k67n5qj81"
            className="_2bafp"
            data-testid="richTextElement"
          >
            <p className="font_8" style={{ fontSize: "15px" }}>
              <span className="color_15">Merci pour votre envoi !</span>
            </p>
          </div>
          <div id="comp-k67n5qjb2" aria-disabled="false" className="_2btH0">
            <button data-testid="buttonElement" className="_2k7xj">
              <span className="nr31w">Envoyer</span>
            </button>
          </div>
        </div>

        <div className="_1Qq93">
          <label data-children-count="1">
            Veuillez laisser ce champ vide.
            <input
              type="text"
              name="message"
              autocomplete="nada"
              tabindex="-1"
              value=""
            />
          </label>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
