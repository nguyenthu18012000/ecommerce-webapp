import { Upload, Modal, Form, Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';
import imageService from '../../../services/admin/image.service';

const FormItem = Form.Item

function getBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
}

const UploadImage = () => {
    const [state, setState] = useState({
        previewVisible: false,
        previewImage: '',
        previewTitle: '',
        fileList: [],
    });

    const handleCancel = () => setState({ previewVisible: false });

    const handlePreview = async file => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }

        setState({
            previewImage: file.url || file.preview,
            previewVisible: true,
            previewTitle: file.name || file.url.substring(file.url.lastIndexOf('/') + 1),
        });
    };

    const handleChange = ({ fileList }) => {
        console.log(fileList);
        setState({ fileList })
    };

    const { previewVisible, previewImage, fileList, previewTitle } = state;
    const uploadButton = (
        <div>
            <PlusOutlined />
            <div style={{ marginTop: 8 }}>Upload</div>
        </div>
    );

    const handleSubmit = () => {
        console.log(fileList);
        // await imageService.uploadImage(file);
    }

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <FormItem>
                    <Upload
                        name='image'
                        action={'http://localhost:4000/api/admin/image/upload'}
                        onChange={handleChange}
                        onPreview={handlePreview}
                        listType="picture-card"
                        maxCount={10}
                        multiple
                    >
                        {uploadButton}
                    </Upload>
                    <Button type="primary" htmlType="submit">
                        Register tenant
                    </Button>
                </FormItem>
            </Form>
            <Modal
                visible={previewVisible}
                title={previewTitle}
                footer={null}
                onCancel={handleCancel}
            >
                <img alt="example" style={{ width: '100%' }} src={previewImage} />
            </Modal>
        </>
    );

}

export default UploadImage;