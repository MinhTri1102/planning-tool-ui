import React from 'react'; // Bỏ useState, useEffect vì App.js sẽ quản lý
import { Card, Button, Checkbox, Table, Tabs } from 'antd';
import FilterPanel from './FilterPanel.js';

const { TabPane } = Tabs;

// Nhận props từ App.js, ví dụ: { vendors, nonApprovalRqs, ... }
export default function DesktopLayout(props) {
    // Tất cả các state và hàm xử lý đã được chuyển lên App.js
    // Chúng ta sẽ truy cập qua props, ví dụ: props.nonApprovalRqs

    const vendorOptions = props.vendors.map(vendor => ({
        label: vendor.name,
        value: vendor.id,
    }));

    // Các định nghĩa cột (columns) có thể giữ lại ở đây hoặc chuyển lên App.js
    const nonApprovalColumns = [
        // ...
    ];
    // ... các columns khác

    return (
        <div className="app-container">
            <h1 className="main-title">PLANNING TOOL</h1>

            <FilterPanel
                filters={props.filters}
                onFilterChange={props.onFilterChange}
                onUpdate={props.onUpdate}
            />

            <div className="card-container" style={{ marginTop: '20px' }}>
                <Tabs defaultActiveKey="1" type="card">
                    <TabPane tab="Non-Approval RQs" key="1">
                        <Table
                            columns={nonApprovalColumns}
                            dataSource={props.nonApprovalRqs} // <-- Dùng dữ liệu từ props
                        // ...
                        />
                    </TabPane>
                    {/* ... các TabPane khác cũng dùng dữ liệu từ props ... */}
                </Tabs>
            </div>
        </div>
    );
}