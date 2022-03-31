import { Modal, Button, Divider } from 'antd';
import { useEffect, useState } from 'react';
import ListImage from '../../list-image';
import UploadImage from '../../upload-image';
import imageService from '../../../../services/admin/image.service';

const UploadImageModal = () => {
    const [visible, setVisible] = useState(false)
    const [isStorage, setIsStorage] = useState(true)
    const [checkList, setCheckList] = useState([])
    const [listImage, setListImage] = useState([])

    const showModal = () => {
        getListImage();
        setVisible(true);
    };

    const handleOk = e => {
        setVisible(false);
    };

    const handleCancel = e => {
        console.log(e);
        setVisible(false);
    };

    const sendCheckList = (e) => {
        console.log(e);
        setCheckList(e);
        setVisible(false);
    }

    const getListImage = async () => {
        await imageService.getAll({ page: 0, perPage: 20 }, (res) => {
            setListImage(res.rows)
        })
    }

    const deleteImage = async (id) => {
        await imageService.deleteImage({id: id}, (res) => {
            console.log(res)
        })
    }

    return (
        <>
            <div>
                {checkList.length > 0 && <ListImage
                    props={{
                        listImage: checkList,
                        height: 50,
                        width: 50,
                        isSelect: false,
                        isDelete: true,
                        deleteFunction: () => { console.log(isStorage) },
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
                style={{ top: 20 }}
                bodyStyle={{ height: '625px' }}
            >
                <div style={{ position: 'relative' }}>
                    <div style={{ paddingBottom: 5 }}>
                        <Button onClick={() => { getListImage(); setIsStorage(true) }} style={{ margin: 3 }}>Storage</Button>
                        <Button onClick={() => { getListImage(); setIsStorage(false) }} style={{ margin: 3 }}>Upload image</Button>
                        <Divider style={{ margin: 3 }} />
                    </div>
                    {isStorage ?
                        <div>
                            <ListImage
                                props={{
                                    listImage: listImage,
                                    width: 200,
                                    isSelect: true,
                                    isDelete: true,
                                    deleteFunction: deleteImage,
                                }}
                                sendCheckList={sendCheckList}
                            />
                        </div> :
                        <div>
                            <UploadImage />
                        </div>
                    }
                </div>
            </Modal>
        </>
    );
}

export default UploadImageModal