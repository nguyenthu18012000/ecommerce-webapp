import { Modal, Button, Divider, Radio, Spin } from 'antd';
import { forwardRef, useImperativeHandle, useState } from 'react';
import ListImage from '../../list-image';
import UploadImage from '../../upload-image';
import imageService from '../../../../services/admin/image.service';

const UploadImageModal = ({ getImage, isHideListImageChoosed = false }, ref) => {
    useImperativeHandle(ref, () => ({
        clearImage() {
            setCheckList([]);
        }
    }), []);
    const OPTION_MODAL = {
        STORAGE: 'Storage',
        UPLOAD_IMAGE: 'Upload image'
    }
    const [visible, setVisible] = useState(false)
    const [optionModal, setOptionModal] = useState(OPTION_MODAL.STORAGE)
    const [checkList, setCheckList] = useState([])
    const [listImage, setListImage] = useState([])

    const showModal = () => {
        getListImage();
        setVisible(true);
    };

    const handleCancel = e => {
        setOptionModal(OPTION_MODAL.STORAGE);
        setVisible(false);
    };

    const sendCheckList = (e) => {
        setCheckList(e);
        getImage(e);
        setVisible(false);
    }

    const getListImage = async () => {
        await imageService.getAll({ page: 0, perPage: 20 }, (res) => {
            setListImage(res.rows)
        })
    }

    const deleteImage = async (id) => {
        await imageService.deleteImage({ id: id }, (res) => {
            getListImage();
        })
    }

    const handleOption = ({ target: { value } }) => {
        getListImage();
        setOptionModal(value);
    };

    return (
        <>
            <div>
                {checkList.length > 0 && !isHideListImageChoosed && <ListImage
                    props={{
                        listImage: checkList,
                        height: 100,
                        width: 100,
                        isDelete: true,
                        deleteFunction: (e) => {
                            let newlist = checkList.filter((value) => value.id !== e);
                            setCheckList(newlist);
                        },
                    }}
                />}
            </div>
            <Button type="primary" onClick={showModal}>
                Add image
            </Button>
            <Modal
                visible={visible}
                footer={false}
                width={'80%'}
                onCancel={handleCancel}
                style={{ top: 20 }}
                bodyStyle={{ height: '625px' }}
            >
                <div style={{ position: 'relative' }}>
                    <div style={{ paddingBottom: 5 }}>
                        <Radio.Group onChange={handleOption} value={optionModal} style={{ marginBottom: 3 }}>
                            <Radio.Button value={OPTION_MODAL.STORAGE}>Storage</Radio.Button>
                            <Radio.Button value={OPTION_MODAL.UPLOAD_IMAGE}>Upload image</Radio.Button>
                        </Radio.Group>
                        <Divider style={{ margin: 3 }} />
                    </div>
                    {optionModal === OPTION_MODAL.STORAGE ?
                        <div>
                            {listImage.length !== 0 ?
                                <ListImage
                                    props={{
                                        listImage: listImage,
                                        width: 200,
                                        height: 200,
                                        isSelect: true,
                                        isDelete: true,
                                        deleteFunction: deleteImage,
                                        sendCheckList: sendCheckList,
                                    }}
                                /> :
                                <Spin size="large" />
                            }
                        </div> :
                        <div>
                            <UploadImage handleCancel={handleCancel} />
                        </div>
                    }
                </div>
            </Modal>
        </>
    );
}

export default forwardRef(UploadImageModal);