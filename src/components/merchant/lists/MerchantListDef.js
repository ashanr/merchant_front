import moment from "moment";

export default [
    {
        name: "MerchantID",
        sortField: "id",
        title: '<i class="grey sitemap icon"></i>Merchant ID',
        width: "5%",
        filterable: false,
        togglable: false
    },
    {
        name: "Name",
        sortField: "Name",
        title: '<i class="grey sitemap icon"></i>Name',
        width: "20%",
        filterable: false,
        togglable: false
    },
    {
        name: "District",
        sortField: "PostalCode",
        title: '<i class="grey sitemap icon"></i>District',
        width: "10%",
        filterable: false,
        togglable: false
    },
    {
        name: "PostalCode",
        sortField: "PostalCode",
        title: '<i class="grey sitemap icon"></i>Postal Code',
        width: "15%",
        // formatter(creator) {         
        //         return creator.email;        
        // },
        filterable: false,
        togglable: false
    },
    {
        name: "PaymentDate",
        sortField: "PaymentDate",
        title: '<i class="grey sitemap icon"></i>Payment Date',
        width: "20%",
        filterable: false,
        togglable: false
    },
    {
        name: "PaymentAmount",
        sortField: "PaymentAmount",
        title: '<i class="grey sitemap icon"></i>Amount',
        width: "10%",
        filterable: false,
        togglable: false
    },
    {
        name: "Card",
        sortField: "Card",
        title: '<i class="grey sitemap icon"></i>Card',
        width: "10%",
        filterable: false,
        togglable: false
    },
    {
        name: "MerchantStatus",
        sortField: "MerchantStatus",
        title: '<i class="grey sitemap icon"></i>Status',
        width: "10%",
        formatter(value) {
            if (value == 0) {
                return "<span class='badge badge-dark p-2'>In Active</span>";
            } else if (value == 1) {
                return "<span class='badge badge-success p-2'>Active</span>";
            }else  {
                return "<span class='badge badge-info p-2'>Other</span>";
            }
        },
        filterable: false,
        togglable: false
    },

];