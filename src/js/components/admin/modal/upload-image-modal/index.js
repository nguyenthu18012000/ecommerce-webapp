import { Modal, Button, Divider, Radio, Spin, Pagination } from 'antd';
import { useState } from 'react';
import ListImage from '../../list-image';
import UploadImage from '../../upload-image';
import imageService from '../../../../services/admin/image.service';

const UploadImageModal = (props) => {
    const {
        getImage,
        currentImages = [],
        isMultipleSelect = true,
    } = props;
    const OPTION_MODAL = {
        STORAGE: 'Storage',
        UPLOAD_IMAGE: 'Upload image'
    }
    const [visible, setVisible] = useState(false)
    const [optionModal, setOptionModal] = useState(OPTION_MODAL.STORAGE)
    const [listImage, setListImage] = useState([])
    const [loading, setLoading] = useState()
    const [count, setCount] = useState(1)

    const showModal = () => {
        getListImage();
        setVisible(true);
    };

    const handleCancel = e => {
        setOptionModal(OPTION_MODAL.STORAGE);
        setVisible(false);
    };

    const sendCheckList = (e) => {
        getImage(e);
        setVisible(false);
    }

    const getListImage = (page = 0) => {
        setLoading(true)
        imageService.getAll({ page: page, perPage: 20 }, (res) => {
            setListImage(res.rows);
            setCount(res.count);
            setLoading(false);
        }, () => setLoading(false))
    }

    const deleteImage = async (id) => {
        imageService.deleteImage({ id: id }, (res) => {
            getListImage();
        })
    }

    const handleOption = ({ target: { value } }) => {
        getListImage();
        setOptionModal(value);
    };

    const onChangePage = (page, pageSize) => {
        console.log(page);
        console.log(pageSize);
        getListImage(page - 1)
    }

    return (
        <>
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
                        <Radio.Group onChange={handleOption} value={optionModal} style={{ marginBottom: 3, display: 'flex' }}>
                            <Radio.Button value={OPTION_MODAL.STORAGE}>Storage</Radio.Button>
                            <Radio.Button value={OPTION_MODAL.UPLOAD_IMAGE}>Upload image</Radio.Button>
                            {
                                optionModal === OPTION_MODAL.STORAGE && <Pagination style={{ margin: 'auto' }} defaultCurrent={1} total={count} pageSize={20} onChange={onChangePage} />
                            }
                        </Radio.Group>

                        <Divider style={{ margin: 3 }} />
                    </div>
                    {optionModal === OPTION_MODAL.STORAGE ?
                        <div>
                            {!loading && listImage.length !== 0 ?
                                <ListImage
                                    listImage={listImage}
                                    currentImages={currentImages}
                                    width={200}
                                    height={200}
                                    isSelect={true}
                                    isDelete={true}
                                    multiple={isMultipleSelect}
                                    deleteFunction={deleteImage}
                                    sendCheckList={sendCheckList}
                                /> :
                                <Spin size="large" style={{ textAlign: 'center' }} />
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

export default UploadImageModal;