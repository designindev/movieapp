import React, { useState } from 'react';
import Modal from 'react-modal';
import Button from '@/components/Button';
import Input from '@/components/Form/Input';
import { Styles } from 'react-modal';

const modalStyles: Styles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 1000,
  },
  content: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    border: 'none',
    transform: 'translate(-50%, -50%)',
    padding: '20px',
    backgroundColor: 'rgb(9 53 69)',
    borderRadius: '20px',
    maxHeight: 'max-content',
    overflow: 'auto',
  },
};

interface EditModalProps {
    isOpen: boolean;
    onClose: () => void;
    onAccept: (text: string) => void;
}

const EditModal: React.FC<EditModalProps> = ({ isOpen, onClose, onAccept }) => {
    const [link, setLink] = useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setLink(e.target.value);
    };

    const handleAccept = () => {
      onAccept(link);
      setLink('');
    };

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onClose}
            ariaHideApp={false}
            style={modalStyles}
        >
            <div className="flex flex-col gap-4">
              <label htmlFor="modal" className='text-title text-white'>Insert link</label>
                <Input
                    type="text"
                    value={link}
                    onChange={handleInputChange}
                    placeholder="https://"
                    id='modal'
                />
                <div className="flex gap-4 justify-around">
                    <Button text="Close" onClick={onClose} view="cancel" />
                    <Button text="Accept" onClick={handleAccept} view="primary" />
                </div>
            </div>
        </Modal>
    );
};

export default EditModal;
