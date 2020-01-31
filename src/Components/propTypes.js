import PropTypes from 'prop-types';

const itemType = PropTypes.shape({
    id: PropTypes.number,
    age: PropTypes.string,
    name: PropTypes.string,
    surname: PropTypes.string,
    phone: PropTypes.string
});

const dataType = PropTypes.arrayOf(itemType);

export default {
    ...PropTypes,
    itemType,
    dataType
}
