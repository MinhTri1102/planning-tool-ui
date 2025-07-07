import React from 'react';
// Thêm Row và Col vào danh sách import
import { Card, DatePicker, Radio, Button, Space, Checkbox, Row, Col } from 'antd';

const { RangePicker } = DatePicker;

function FilterPanel({ filters, onFilterChange, onUpdate }) {
    return (
        <Card>
            {/* Thay thế <Space> bằng <Row> và <Col> */}
            {/* gutter={[16, 16]} tạo khoảng cách 16px giữa các cột và các hàng */}
            <Row gutter={[16, 16]} align="bottom">

                {/* Cột cho DatePicker, chiếm 8/24 cột trên màn hình lớn */}
                <Col xs={24} sm={12} md={8}>
                    <label>Choose Date / Test Note:</label>
                    <RangePicker
                        value={filters.dateRange}
                        onChange={(dates) => onFilterChange({ dateRange: dates })}
                        style={{ width: '100%' }} // Cho DatePicker rộng bằng cột chứa nó
                    />
                </Col>

                {/* Cột cho Radio Button */}
                <Col xs={24} sm={12} md={8}>
                    <Radio.Group
                        value={filters.bokenTest}
                        onChange={(e) => onFilterChange({ bokenTest: e.target.value })}
                    >
                        <Radio value="boken">Boken Test</Radio>
                        <Radio value="no_boken">No Boken Test</Radio>
                    </Radio.Group>
                </Col>

                {/* Cột cho Checkbox và Button */}
                <Col xs={24} sm={24} md={8}>
                    <Space>
                        <Checkbox
                            checked={filters.includeSaturday}
                            onChange={(e) => onFilterChange({ includeSaturday: e.target.checked })}
                        >
                            Saturday
                        </Checkbox>
                        <Checkbox
                            checked={filters.includeSunday}
                            onChange={(e) => onFilterChange({ includeSunday: e.target.checked })}
                        >
                            Sunday
                        </Checkbox>
                        <Button type="primary" onClick={onUpdate}>
                            Update
                        </Button>
                    </Space>
                </Col>

            </Row>
        </Card>
    );
}

export default FilterPanel;