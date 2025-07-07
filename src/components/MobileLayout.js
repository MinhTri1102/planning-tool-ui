import React, { useState } from 'react'
import { AppOutline, UnorderedListOutline, UserOutline } from '@antd-mobile/icons'
import { TabBar, Card, List } from 'antd-mobile'

// Dữ liệu giả, sau này sẽ được truyền từ App.js
const mockNonApprovalRqs = [
    { reqNumber: 'REQ-101', item: 'Cotton', vendorName: 'SamVinaCoLtd' },
    { reqNumber: 'REQ-102', item: 'Woven', vendorName: 'NamtexCoLtd' },
];

// --- CÁC MÀN HÌNH CON ---

const DashboardScreen = () => {
    return (
        <div style={{ padding: '12px' }}>
            <Card title="Non-Approval RQs">
                <h1>2 items</h1>
                <p>Cần được xem xét</p>
            </Card>
            <Card title="Summary by Fabric" style={{ marginTop: '12px' }}>
                <h1>6 types</h1>
                <p>Đang được xử lý</p>
            </Card>
        </div>
    )
}

const RequestsScreen = () => {
    return (
        <List header="Danh sách Non-Approval RQs">
            {mockNonApprovalRqs.map(rq => (
                <List.Item key={rq.reqNumber} extra={rq.item} description={`Vendor: ${rq.vendorName}`}>
                    {rq.reqNumber}
                </List.Item>
            ))}
        </List>
    )
}

// --- COMPONENT BỐ CỤC CHÍNH ---

export default function MobileLayout() {
    const tabs = [
        { key: 'dashboard', title: 'Dashboard', icon: <AppOutline /> },
        { key: 'requests', title: 'Requests', icon: <UnorderedListOutline /> },
        { key: 'profile', title: 'Profile', icon: <UserOutline /> },
    ]

    // State để biết tab nào đang được chọn
    const [activeKey, setActiveKey] = useState('dashboard')

    const renderContent = () => {
        switch (activeKey) {
            case 'dashboard':
                return <DashboardScreen />;
            case 'requests':
                return <RequestsScreen />;
            default:
                return <div>Nội dung tab {activeKey}</div>;
        }
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
            <div style={{ flex: 1, overflowY: 'auto' }}>
                {renderContent()}
            </div>
            <TabBar activeKey={activeKey} onChange={setActiveKey}>
                {tabs.map(item => (
                    <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
                ))}
            </TabBar>
        </div>
    )
}