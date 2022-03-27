import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';

PostFilterForm.propTypes = {
    onSubmit: PropTypes.func,
};

PostFilterForm.defaultProps = {
    onSubmit: null,
}

function PostFilterForm(props) {
    const {onSubmit} = props;
    const [searchTerm, setSearchTerm] = useState('');
    const typingTimeoutRef = useRef(null);

    const handleSearchTermChange = (e) => {
        const value = e.target.value;
        setSearchTerm(e.target.value)

        if(!onSubmit) return;

        if(typingTimeoutRef.current) {
            clearTimeout(typingTimeoutRef.current);
        }

        typingTimeoutRef.current = setTimeout(() => {
            const formValues = {
                searchTerm: value,
            };
            onSubmit(formValues)
        }, 1000)
    }

    return (
        <form>
            <input 
                type="text"
                value={searchTerm}
                onChange={handleSearchTermChange}
            />
        </form>
    );
}

export default PostFilterForm;