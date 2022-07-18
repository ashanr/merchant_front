export default [{
    _name: 'CSidebarNav',
    _children: [{
        _name: 'CSidebarNavItem',
        name: 'Dashboard',
        to: '/home',
        icon: 'cil-puzzle',
        badge: {
            color: 'primary',
            text: 'NEW'
        }
    },
    {
        _name: 'CSidebarNavItem',
        name: 'Add List',
        to: '/views/insurance/addlist',
        icon: 'cil-puzzle',
    },
    {
        _name: 'CSidebarNavDropdown',
        name: 'Candidates Registration',
        route: '/candidatesregistration',
        icon: 'cil-puzzle',
        items: [{
            name: 'Swap Candidate',
            to: '/views/insurance/SwapCandidate'
        },
        {
            name: 'Swap Request',
            to: '/views/insurance/SwapRequest'
        },
        {
            name: 'Registration',
            to: '/views/insurance/registration'
        },
        {
            name: 'List of Que',
            to: '/views/insurance/quelist'
        },
        ]
    },
    {
        _name: 'CSidebarNavDropdown',
        name: 'Student Management',
        route: '/studentmanagement',
        icon: 'cil-puzzle',
        items: [{
            name: 'Student Records',
            to: '/views/insurance/studentrecords'
        },]
    },
    {
        _name: 'CSidebarNavDropdown',
        name: 'Exam Management',
        route: '/exammanagement',
        icon: 'cil-puzzle',
        items: [{
            name: 'Exams',
            to: '/views/insurance/exam'
        }, {
            name: 'Certification',
            to: '/views/insurance/certification'
        }, {
            name: 'Mark Verification',
            to: '/views/insurance/markverification'
        },]
    },
    {
        _name: 'CSidebarNavDropdown',
        name: 'Hall Management',
        route: '/hallmanagement',
        icon: 'cil-speedometer',
        items: [{
            name: 'Hall Creation',
            to: '/views/slii/HallCreation'
        },
        {
            name: 'Hall Booking',
            to: '/views/slii/HallBooking'
        },

        ]
    },
    {
        _name: 'CSidebarNavItem',
        name: 'Invigilator Management',
        to: '/views/slii/invigilatormanagment',
        icon: 'cil-speedometer',
    },
    {
        _name: 'CSidebarNavDropdown',
        name: 'Exam Management',
        route: '/exammanagement',
        icon: 'cil-speedometer',
        items: [{
            name: 'Exam Schedule',
            to: '/views/slii/examshedule'
        }, {
            name: 'Exam Attendance',
            to: '/views/slii/examattendance'
        },
        {
            name: 'Medical Approval',
            to: '/views/slii/medicalapproval'
        },
        {
            name: 'Exam Marks',
            to: '/views/slii/exammarks'
        },
        {
            name: 'RII Pending List',
            to: '/views/slii/riilist'
        },
        {
            name: 'Mark Verifications',
            to: '/views/slii/markverifications'
        },
        ]
    },
    {
        _name: 'CSidebarNavDropdown',
        name: 'User Management',
        route: '/usermanagement',
        icon: 'cil-speedometer',
        items: [{
            name: 'User Role List',
            to: '/views/slii/usermanagement'
        },
        {
            name: 'User Role Assign List',
            to: '/views/slii/roleassignusers'
        },
        {
            name: 'User Permission',
            to: '/views/slii/userpermission'
        },
        ]
    },
    {
        _name: 'CSidebarNavDropdown',
        name: 'Company Management',
        route: '/companymanagement',
        icon: 'cil-speedometer',
        items: [{
            name: 'Company List',
            to: '/views/application/slii/master/company_mgt/CompanyManagement'
        },
        {
            name: 'Company Registration',
            to: '/views/application/slii/master/company_mgt/CompanyRegistrationForm'
        },
        ]
    },
    {
        _name: 'CSidebarNavItem',
        name: 'City Management',
        to: '/views/slii/citymanagement',
        icon: 'cil-speedometer',
    },
    {
        _name: 'CSidebarNavDropdown',
        name: 'Candidates Management',
        route: '/candidatesmanagement',
        icon: 'cil-speedometer',
        items: [{
            name: 'Candidates Swap List',
            to: '/views/slii/candidatesswaplist'
        },
        {
            name: 'Candidate Records',
            to: '/views/slii/candidaterecords'
        },
        ]
    },
    {
        _name: 'CSidebarNavDropdown',
        name: 'Certification Management',
        route: '/certificationmanagement',
        icon: 'cil-speedometer',
        items: [{
            name: 'Certification Request List',
            to: '/views/slii/certification'
        },
        {
            name: 'Renew Certification',
            to: '/views/slii/renewcertification'
        },

        ]
    },
    {
        _name: 'CSidebarNavDropdown',
        name: 'Account Management',
        route: '/accountmanagement',
        icon: 'cil-speedometer',
        items: [{
            name: 'Hall Booking',
            to: '/views/slii/accounthallbooking'
        },
        {
            name: 'Invigilators Payment',
            to: '/views/slii/accountinvigilators'
        },
        {
            name: 'Certification',
            to: '/views/slii/accountcertification'
        },
        {
            name: 'Mark Verification',
            to: '/views/slii/accountmarkverification'
        },
        {
            name: 'Mark Re-correction',
            to: '/views/slii/accountmarkrecorrection'
        },


        ]
    },

    ]
}]