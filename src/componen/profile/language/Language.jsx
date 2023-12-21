import React, { useState, useEffect } from 'react';
import { Card, Button, Modal, Form } from 'react-bootstrap';
import { GoPlus } from 'react-icons/go';
import { BsPencilFill } from 'react-icons/bs';
import { FaRegLightbulb, FaArrowLeft } from 'react-icons/fa6';

const LanguageSettings = () => {
	const [language, setLanguage] = useState(localStorage.getItem('selectedLanguage') || 'English');
	const [showChangeLanguage, setshowChangeLanguage] = useState(false);
	const [showSelectLanguage, setShowSelectLanguage] = useState(false);

	const [editedLanguage, setEditedLanguage] = useState('');
	const greyCircleStyle = {
		backgroundColor: 'lightgrey',
		borderRadius: '50%',
		width: '40px',
		height: '40px',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	};

	const handleModalLanguageSetting = () => {
		setshowChangeLanguage(true);
		setEditedLanguage(language);
	};

	const handleCloseModalChangeLanguage = () => {
		setshowChangeLanguage(false);
	};

	// modal select language
	const handleModalSelectLanguage = () => {
		setShowSelectLanguage(true);
		setEditedLanguage(language);
	};

	const handleCloseModalSelectLanguage = () => {
		setShowSelectLanguage(false);
	};

	const handleSave = () => {
		setLanguage(editedLanguage);
		setshowChangeLanguage(false);
	};

	const handleBack = () => {
		setShowSelectLanguage(false); 
		setshowChangeLanguage(true);
		
	};

	useEffect(() => {
        
        const storedLanguage = localStorage.getItem('selectedLanguage');
        if (storedLanguage) {
            setLanguage(storedLanguage);
        }
    }, []);

    const handleLanguageChange = (selectedLanguage) => {
        setLanguage(selectedLanguage); 
        setShowSelectLanguage(false); 
        setshowChangeLanguage(true);
        setEditedLanguage(selectedLanguage); 
        localStorage.setItem('selectedLanguage', selectedLanguage);
    };
	

	return (
		<div>
			<Card.Body>
				<Card.Title className='d-flex justify-content-between align-items-center'>
					Language Settings
					<Button
						variant='link'
						onClick={handleModalLanguageSetting}
					>
						<div style={greyCircleStyle}>
							<BsPencilFill style={{ fontSize: '1.2em', color: 'black' }} />
						</div>
					</Button>
				</Card.Title>
				<Card.Text>{language}</Card.Text>
			</Card.Body>



			{/* Modal Change Language*/}
			<Modal
				className='modal fade'
				id='modal__change-language'
				size='lg'
				show={showChangeLanguage}
				onHide={handleCloseModalChangeLanguage}
			>
				<Modal.Header
					style={{ border: '0' }}
					closeButton
				>
					<Modal.Title>Language Settings</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Button
						type='submit'
						variant='outline-dark'
						className='custom-button'
						style={{ borderRadius: '25px', width: '100px', marginRight: '10px' }}
					>
						{editedLanguage}
					</Button>{' '}
					<Button
						type='submit'
						variant='outline-success link'
						className='custom-button'
						style={{ borderRadius: '25px', width: '185px' }}
						onClick={handleModalSelectLanguage}
					>
						<GoPlus /> Change Language
					</Button>{' '}
					<div>
						<br />
						<p>
							<FaRegLightbulb /> You can only have 1 profile per language. When you switch your primary profile, empty section will be filled using your previous primary language.
						</p>
					</div>
				</Modal.Body>
			</Modal>

			{/* Modal Select Language */}
			<Modal
				className='modal fade'
				id='modal__select-language'
				size='lg'
				show={showSelectLanguage}
				onHide={handleCloseModalSelectLanguage}
				
			>
				<Modal.Header style={{ border: '0' }} closeButton>
					<Modal.Title className="d-flex justify-content-center align-items-center w-100">
						<FaArrowLeft style={{ cursor: 'pointer' }} onClick={handleBack} />  
						<span className="mx-auto">Change Language</span>
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
          <div>
          <p>Language of new profile</p>
            <Form.Select aria-label="Default select example" onChange={(e) => handleLanguageChange(e.target.value)}>
              <option>Choose..</option>
              <option value="English">English</option>
              <option value="Afrikaans">Afrikaans</option>
              <option value="Albanian">Albanian</option>
              <option value="Amharic">Amharic</option>
              <option value="Arabic">Arabic</option>
              <option value="Armenian">Armenian</option>
              <option value="Azerbaijan">Azerbaijan</option>
              <option value="Basque">Basque</option>
              <option value="Korean">Korean</option>
              <option value="Japanese">Japanese</option>
              <option value="Bosnian">Bosnian</option>
              <option value="Czech">Czech</option>
            </Form.Select>
					</div>
					
					<div>
						<br />
						<p>
							<FaRegLightbulb /> Add the language that is currently displayed in this page.
						</p>
					</div>
				</Modal.Body>
			</Modal>
		</div>
	);
};

export default LanguageSettings;
