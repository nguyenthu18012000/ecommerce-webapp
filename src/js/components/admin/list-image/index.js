import { Button, Checkbox, Divider, Image, Layout } from 'antd';
import { useState } from 'react';
import { DeleteOutlined } from '@ant-design/icons';
import { Footer } from 'antd/lib/layout/layout';

const ListImage = ({ props, sendCheckList }) => {
    const data = {
        listImage: props?.listImage || [],
        multiple: props?.multiple || true,
        width: props?.width || null,
        height: props?.height || null,
        isSelect: props?.isSelect || false,
        isPreview: props?.isPreview || false,
        isDelete: props?.isDelete || false,
        deleteFunction: props?.deleteFunction || null,
    }

    const [checkList, setCheckList] = useState([]);

    const onChange = async (checkedValues) => {
        setCheckList(checkedValues)
    }

    return (
        <div style={{ position: 'relative' }}>
            <div style={{ overflow: 'auto', maxHeight: '500px' }}>
                <Checkbox.Group style={{ width: '100%' }} onChange={onChange}>
                    {data.listImage.map((item) =>
                        <div key={item.id} style={{ display: "inline-grid", margin: 2 }}>
                            <div style={{ position: 'relative', top: 0 }}>
                                <Checkbox
                                    value={item}
                                    className="checkbox-none-background"
                                    style={{
                                        position: 'absolute',
                                        zIndex: 2,
                                        left: 4,
                                        visibility: data.isSelect ? 'visible' : 'hidden',
                                    }}
                                ></Checkbox>
                            </div>
                            <div style={{ border: '1px solid #3bedff9c', padding: 2, margin: 2 }}>
                                <div style={{ position: 'relative' }}>
                                    <Button
                                        onClick={() => data.deleteFunction(item.id)}
                                        shape="circle"
                                        style={{
                                            position: 'absolute',
                                            zIndex: 2,
                                            right: 0,
                                            background: '#00000000',
                                            visibility: data.isDelete ? 'visible' : 'hidden'
                                        }}
                                        danger
                                    >
                                        <DeleteOutlined />
                                    </Button>
                                </div>
                                <Image
                                    width={data.width}
                                    height={data.height}
                                    src={item.src}
                                />
                            </div>
                            <div style={{ textAlign: 'center' }}>{item.name}</div>
                        </div>
                    )}
                </Checkbox.Group>
            </div>
            {data.isSelect &&
                <div style={{ paddingTop: 5, width: '100%', textAlign: 'end' }}>
                    <Divider style={{ margin: 3 }} />
                    <Button type='primary' primary onClick={() => sendCheckList(checkList)}>Ok</Button>
                </div>
            }
        </div>
    )
}

export default ListImage;