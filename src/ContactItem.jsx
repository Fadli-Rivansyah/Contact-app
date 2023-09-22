import React from "react";
import ContactitemBody from "./ContactitemBody";
import ContactitemImage from "./ContactitemImage";
import DeleteButton from "./DeleteButton";

function ContactItem ({name, tag, imageUrl, id, onDelete}) {
      return (
            <div className="contact-item">
                  <ContactitemImage imageUrl={imageUrl} />
                  <ContactitemBody name={name} tag={tag} />
                  <DeleteButton id={id} onDelete={onDelete} />
            </div>
      );
}

export default ContactItem;