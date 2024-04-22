import PropTypes from 'prop-types';
export default function ContactList({contacts, selectedId, dispatch}) {
    return (
      <section className="contact-list">
        <ul>
          {contacts.map((contact) => (
            <li key={contact.id}>
              <button
                onClick={() => {
                  dispatch({
                    type: 'changed_selection',
                    contactId: contact.id,
                  });
                }}>
                {selectedId === contact.id ? <b>{contact.name}</b> : contact.name}
              </button>
            </li>
          ))}
        </ul>
      </section>
    );
  }
  ContactList.propTypes = {
    contacts: PropTypes.array.isRequired, 
    selectedId: PropTypes.number.isRequired,
    dispatch: PropTypes.func.isRequired,
  };