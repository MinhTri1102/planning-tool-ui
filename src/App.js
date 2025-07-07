import React, { useState, useEffect } from 'react';

// Import các layout và dữ liệu
import DesktopLayout from './components/DesktopLayout.js';
import MobileLayout from './components/MobileLayout.js';
import {
    mockVendors,
    mockNonApprovalRqs,
    mockSummaryByFabric,
    mockSummaryByVendor
} from './data/mockData.js';

/**
 * Hook tùy chỉnh để theo dõi chiều rộng cửa sổ trình duyệt.
 * @returns {number} Chiều rộng hiện tại của cửa sổ.
 */
function useWindowWidth() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        // Dọn dẹp listener khi component bị hủy
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowWidth;
}

/**
 * Component App: "Bộ não" của ứng dụng.
 * Quản lý state, logic và chọn giao diện để render.
 */
export default function App() {
    // --- STATE MANAGEMENT ---
    // Toàn bộ trạng thái của ứng dụng được quản lý tập trung tại đây.
    const [vendors, setVendors] = useState([]);
    const [nonApprovalRqs, setNonApprovalRqs] = useState([]);
    const [summaryByFabric, setSummaryByFabric] = useState([]);
    const [summaryByVendor, setSummaryByVendor] = useState([]);
    const [filters, setFilters] = useState({
        dateRange: [null, null],
        bokenTest: 'no_boken',
        includeSaturday: false,
        includeSunday: false,
    });

    // --- HANDLERS ---
    // Các hàm xử lý sự kiện
    const handleFilterChange = (changedValues) => {
        setFilters(prevFilters => ({ ...prevFilters, ...changedValues }));
    };

    const handleUpdate = () => {
        console.log('Applying filters:', filters);
        // Logic gọi API để lấy dữ liệu mới sẽ được đặt ở đây trong tương lai
    };

    // --- DATA FETCHING ---
    // Tải dữ liệu giả lập khi ứng dụng khởi động
    useEffect(() => {
        setVendors(mockVendors);
        setNonApprovalRqs(mockNonApprovalRqs);
        setSummaryByFabric(mockSummaryByFabric);
        setSummaryByVendor(mockSummaryByVendor);
    }, []);

    // --- RESPONSIVE LOGIC ---
    // Quyết định giao diện dựa trên chiều rộng màn hình
    const width = useWindowWidth();
    const isMobile = width < 768; // Ngưỡng xác định thiết bị di động

    // Đóng gói tất cả state và handlers vào một object props để truyền đi
    const appProps = {
        vendors,
        nonApprovalRqs,
        summaryByFabric,
        summaryByVendor,
        filters,
        onFilterChange: handleFilterChange,
        onUpdate: handleUpdate,
    };

    // --- RENDER ---
    // Trả về layout tương ứng và truyền props vào
    if (isMobile) {
        return <MobileLayout {...appProps} />;
    }

    return <DesktopLayout {...appProps} />;
}