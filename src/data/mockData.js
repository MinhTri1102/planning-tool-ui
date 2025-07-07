// Dữ liệu giả cho danh sách Vendors
export const mockVendors = [
    { id: 'V001', name: 'Cty TNHH New Wide (Viet Nam)' },
    { id: 'V002', name: 'Mh Textile VietNamCoLtd' },
    { id: 'V003', name: 'SuzhouWellyTextileCoLtd' },
    { id: 'V004', name: 'SamVinaCoLtd' },
    { id: 'V005', name: 'NamtexCoLtd' },
    { id: 'V006', name: 'Wangsheng TextilesCoLtd' },
    { id: 'V007', name: 'BaoMinhTextileJsc' },
];

// Dữ liệu giả cho bảng NON APPROVAL RQS
export const mockNonApprovalRqs = [
    { reqNumber: 'REQ-101', item: 'Cotton', quantity: 5000, vendorName: 'SamVinaCoLtd', approvedFl: 'N', requester: 'John Doe', releasedDate: '2025-07-06' },
    { reqNumber: 'REQ-102', item: 'Woven', quantity: 2500, vendorName: 'NamtexCoLtd', approvedFl: 'N', requester: 'Jane Smith', releasedDate: '2025-07-06' },
];

// Dữ liệu giả cho bảng tóm tắt theo Fabric Type
export const mockSummaryByFabric = [
    { fabricType: "Cotton Jersey", uom: "LB", quantity: 167400 },
    { fabricType: "Jersey", uom: "LB", quantity: 11300 },
    { fabricType: "Jersey sling", uom: "LB", quantity: 7850 },
    { fabricType: "Rib", uom: "LB", quantity: 461400 },
    { fabricType: "Synthetic", uom: "LB", quantity: 5300 },
    { fabricType: "Woven", uom: "YD", quantity: 187800 },
];

// Dữ liệu giả cho bảng tóm tắt theo Vendor
export const mockSummaryByVendor = [
    { vendorName: "BAO MINH TEXTILE JSC", fabricType: "Woven", uom: "YD", quantity: 26500 },
    { vendorName: "CTY TNHH NEW WIDE (VIET NAM)", fabricType: "Rib", uom: "LB", quantity: 12400 },
    { vendorName: "CTY TNHH NEW WIDE (VIET NAM)", fabricType: "Woven", uom: "LB", quantity: 11300 },
    { vendorName: "MH TEXTILE VIET NAM CO LTD", fabricType: "Jersey", uom: "YD", quantity: 161300 },
];