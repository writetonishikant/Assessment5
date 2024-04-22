import PropTypes from 'prop-types';

export default function Chat({contact, message, dispatch}) {
    return (
      <section className="chat">
        <textarea
          value={message}
          placeholder={'Chat to ' + contact.name}
          onChange={(e) => {
            dispatch({
              type: 'edited_message',
              message: e.target.value,
            });
          }}
        />
        <br />
        <button
          onClick={() => {
            alert(`Sending "${message}" to ${contact.email}`);
            dispatch({
              type: 'sent_message',
            });
          }}>
          Send to {contact.email}
        </button>
      </section>
    );
  }

// Prop types validation
Chat.propTypes = {
  contact: PropTypes.object.isRequired, // Ensure contact is an object and is required
  dispatch: PropTypes.func.isRequired, // Ensure dispatch is a function and is required
  message: PropTypes.string.isRequired, // Ensure drafts is an object and is required
};