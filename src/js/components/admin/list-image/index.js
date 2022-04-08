import { Button, Checkbox, Divider, Image, Layout } from 'antd';
import { useState } from 'react';
import { DeleteOutlined } from '@ant-design/icons';

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
            <div style={data.isSelect ? { overflow: 'auto', height: '500px' } : {}}>
                <Checkbox.Group style={{ width: '100%' }} onChange={onChange}>
                    {data.listImage.map((item) =>
                        <div key={item.id}
                            style={{
                                display: "inline-grid",
                                margin: 2,
                                border: '1px solid #3bedff9c',
                                padding: 2,
                                background: '#fff7c0'
                            }}>
                            <div style={{ position: 'relative' }}>
                                {data.isSelect &&
                                    <Checkbox
                                        value={item}
                                    ></Checkbox>
                                }
                                {data.isDelete &&
                                    <Button
                                        className='customer-delete-btn'
                                        size='small'
                                        danger
                                        type='primary'
                                        style={{
                                            position: 'absolute',
                                            zIndex: 2,
                                            right: 0,
                                        }}
                                        onClick={() => data.deleteFunction(item.id)}
                                    >
                                        <DeleteOutlined />
                                    </Button>
                                }
                            </div>
                            <div>
                                <Image
                                    width={data.width}
                                    height={data.height}
                                    src={item.src}
                                />
                            </div>
                            <div className='wrap-text' style={{ textAlign: 'center', maxWidth: data.width }}>{item.name}</div>
                        </div>
                    )}
                </Checkbox.Group>
            </div>
            {data.isSelect &&
                <div style={{ paddingTop: 5, width: '100%', textAlign: 'end' }}>
                    <Divider style={{ margin: 3 }} />
                    <Button type='primary' onClick={() => sendCheckList(checkList)}>Ok</Button>
                </div>
            }
        </div>
    )
}

export default ListImage;