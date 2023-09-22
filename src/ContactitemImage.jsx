import React from 'react';

function ContactitemImage ({imageUrl}) {
      return (
            <div className="container__image">
                  <img src={imageUrl} alt="image profile"/>
            </div>
      );
}

export default ContactitemImage;