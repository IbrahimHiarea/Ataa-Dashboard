// import components
import Project from "../../modules/project";
import Beneficiary from "../../modules/beneficiary";
import Employee from "../../modules/employee";

export const projects = [
    new Project(1 , 'مبادرة لا جوع' , 'https://imgur.com/7x7f05c.png' , '2001-10-4' , '2022-10-18' , 'حلب' , 'عام' , 'تعليم' , 'أهداف كثيرة' , 'مكتمل' , '100' , '100000' , [{id: 1 , name: 'أسامة'}] , [{id: 1 , name: 'حمدي'}]),
    new Project(2 , 'حملة الغذاء' , 'https://imgur.com/7x7f05c.png' , '2001-11-4' , '2022-10-18' , 'حلب' , 'عام' , 'ذوي الهمم' , 'أهداف كثيرة' , 'مكتمل' , '1000000' , '100000' , [{id: 1 , name: 'أسامة'}] , [{id: 1 , name: 'حمدي'}]),
    new Project(3 , 'لا للجوع' , 'https://imgur.com/7x7f05c.png' , '2001-10-4' , '2022-10-18' , 'حلب' , 'عام' , 'مساجد' , 'أهداف كثيرة' ,'مستمر' , '1000000' , '100000' , [{id: 1 , name: 'أسامة'}] , [{id: 1 , name: 'حمدي'}]),
    new Project(4 , 'بالتعليم نرقى' , 'https://imgur.com/7x7f05c.png' , '2011-10-4' , '2022-10-18' , 'حلب' , 'عام' , 'غذاء' , 'أهداف كثيرة' , 'مكتمل' , '1000000' , '100000' , [{id: 1 , name: 'أسامة'}] , [{id: 1 , name: 'حمدي'}]),
    new Project(5 , 'مبادرة لا جوع' , 'https://imgur.com/7x7f05c.png' , '2001-10-1' , '2022-10-18' , 'حلب' , 'عام' , 'رمضان' , 'أهداف كثيرة' , 'مكتمل' , '1000000' , '100000' , [{id: 1 , name: 'أسامة'}] , [{id: 1 , name: 'حمدي'}]),
    new Project(6 , 'مبادرة لا جوع' , 'https://imgur.com/7x7f05c.png' , '2001-10-4' , '2022-10-18' , 'حلب' , 'عام' , 'غذاء' , 'أهداف كثيرة' , 'ملغى' , '1000000' , '100000' , [{id: 1 , name: 'أسامة'}] , [{id: 1 , name: 'حمدي'}]),
    new Project(7 , 'مبادرة لا جوع' , 'https://imgur.com/7x7f05c.png' , '2001-10-4' , '2022-10-18' , 'حلب' , 'عام' , 'غذاء' , 'أهداف كثيرة' , 'مكتمل' , '1000000' , '100000' , [{id: 1 , name: 'أسامة'}] , [{id: 1 , name: 'حمدي'}]),
    new Project(8 , 'مبادرة لا جوع' , 'https://imgur.com/7x7f05c.png' , '2001-10-5' , '2022-10-18' , 'دمشق' , 'خاص' , 'غذاء' , 'أهداف كثيرة' , 'مكتمل' , '1000000' , '100000' , [{id: 1 , name: 'أسامة'}] , [{id: 1 , name: 'حمدي'}]),
    new Project(9 , 'مبادرة لا جوع' , 'https://imgur.com/7x7f05c.png' , '2001-10-4' , '2022-10-18' , 'حلب' , 'عام' , 'غذاء' , 'أهداف كثيرة' , 'مستمر' , '1000000' , '100000' , [{id: 1 , name: 'أسامة'}] , [{id: 1 , name: 'حمدي'}]),
    new Project(10 , 'مبادرة لا جوع' , 'https://imgur.com/7x7f05c.png' , '2001-10-4' , '2022-10-18' , 'حلب' , 'عام' , 'غذاء' , 'أهداف كثيرة' , 'مكتمل' , '1000000' , '100000' , [{id: 1 , name: 'أسامة'}] , [{id: 1 , name: 'حمدي'}]),
    new Project(11 , 'مبادرة لا جوع' , 'https://imgur.com/7x7f05c.png' , '2002-10-4' , '2022-10-18' , 'دمشق' , 'عام' , 'غذاء' , 'أهداف كثيرة' , 'ملغى' , '1000000' , '100000' , [{id: 1 , name: 'أسامة'}] , [{id: 1 , name: 'حمدي'}]),
    new Project(12 , 'مبادرة لا جوع' , 'https://imgur.com/7x7f05c.png' , '2001-10-4' , '2022-10-18' , 'حلب' , 'خاص' , 'غذاء' , 'أهداف كثيرة' , 'ملغى' , '1000000' , '100000' , [{id: 1 , name: 'أسامة'}] , [{id: 1 , name: 'حمدي'}]),
    new Project(13 , 'مبادرة لا جوع' , 'https://imgur.com/7x7f05c.png' , '2001-10-4' , '2022-10-18' , 'حلب' , 'عام' , 'غذاء' , 'أهداف كثيرة' , 'مكتمل' , '1000000' , '100000' , [{id: 1 , name: 'أسامة'}] , [{id: 1 , name: 'حمدي'}]),
    new Project(14 , 'مبادرة لا جوع' , 'https://imgur.com/7x7f05c.png' , '2001-10-4' , '2022-10-18' , 'دير الزور' , 'عام' , 'غذاء' , 'أهداف كثيرة' , 'ملغى' , '1000000' , '100000' , [{id: 1 , name: 'أسامة'}] , [{id: 1 , name: 'حمدي'}]),
    new Project(15 , 'مبادرة لا جوع' , 'https://imgur.com/7x7f05c.png' , '2001-10-4' , '2022-10-18' , 'حلب' , 'عام' , 'غذاء' , 'أهداف كثيرة' , 'مكتمل' , '1000000' , '100000' , [{id: 1 , name: 'أسامة'}] , [{id: 1 , name: 'حمدي'}]),
    new Project(16 , 'مبادرة لا جوع' , 'https://imgur.com/7x7f05c.png' , '2001-10-4' , '2022-10-18' , 'حلب' , 'عام' , 'غذاء' , 'أهداف كثيرة' , 'مكتمل' , '1000000' , '100000' , [{id: 1 , name: 'أسامة'}] , [{id: 1 , name: 'حمدي'}]),
    new Project(17 , 'مبادرة لا جوع' , 'https://imgur.com/7x7f05c.png' , '2001-10-4' , '2022-10-18' , 'حلب' , 'خاص' , 'غذاء' , 'أهداف كثيرة' , 'مكتمل' , '1000000' , '100000' , [{id: 1 , name: 'أسامة'}] , [{id: 1 , name: 'حمدي'}]),
    new Project(18 , 'مبادرة لا جوع' , 'https://imgur.com/7x7f05c.png' , '2001-7-4' , '2022-10-18' , 'اللاذقية' , 'عام' , 'غذاء' , 'أهداف كثيرة' , 'مكتمل' , '1000000' , '100000' , [{id: 1 , name: 'أسامة'}] , [{id: 1 , name: 'حمدي'}]),
    new Project(19 , 'مبادرة لا جوع' , 'https://imgur.com/7x7f05c.png' , '2001-10-4' , '2022-10-18' , 'طرطوس' , 'عام' , 'غذاء' , 'أهداف كثيرة' , 'مكتمل' , '1000000' , '100000' , [{id: 1 , name: 'أسامة'}] , [{id: 1 , name: 'حمدي'}]),
    new Project(20 , 'مبادرة لا جوع' , 'https://imgur.com/7x7f05c.png' , '2001-10-4' , '2022-10-18' , 'حلب' , 'عام' , 'غذاء' , 'أهداف كثيرة' , 'مكتمل' , '1000000' , '100000' , [{id: 1 , name: 'أسامة'}] , [{id: 1 , name: 'حمدي'}]),
    new Project(21 , 'مبادرة لا جوع' , 'https://imgur.com/7x7f05c.png' , '2009-5-4' , '2022-10-18' , 'حلب' , 'خاص' , 'غذاء' , 'أهداف كثيرة' , 'مكتمل' , '1000000' , '100000' , [{id: 1 , name: 'أسامة'}] , [{id: 1 , name: 'حمدي'}]),
];


export const beneficiaries = [
    new Beneficiary(
        1, 
        'سامر الغنمة',
        '01010482314',
        '1986-8-2',
        '0988311840',
        'https://imgur.com/lpGiANX.png',
        'ذكر',
        'متزوج',
        2,
        'راعي',
        '150.80',
        'حلب',
        'منطقة الباب',
        'جانب صيدلية أب محمود',
        [
            {
                id: 1,
                name: 'تعليم'
            }
        ],
        'twfekajeneh@gmail.com',
        'ما بيشكي من شي',
        'عندو سكن',
        'زلمة محترم وابن عالم وناس',
        'مقبول',
        [
            {
                id: 1,
                name: 'مبادرة',
                type: 'عام'
            }
        ]
    ),
    new Beneficiary(
        2, 
        'سامر الغنمة',
        '01010482314',
        '1986-8-2',
        '0988311840',
        'https://imgur.com/lpGiANX.png',
        'ذكر',
        'متزوج',
        2,
        'راعي',
        '150.80',
        'حلب',
        'منطقة الباب',
        'جانب صيدلية أب محمود',
        [
            {
                id: 1,
                name: 'تعليم'
            }
        ],
        'twfekajeneh@gmail.com',
        'ما بيشكي من شي',
        'عندو سكن',
        'زلمة محترم وابن عالم وناس',
        'مقبول',
        [
            {
                id: 1,
                name: 'مبادرة',
                type: 'عام'
            }
        ]
    ),
    new Beneficiary(
        3, 
        'سامر الغنمة',
        '01010482314',
        '1986-8-2',
        '0988311840',
        'https://imgur.com/lpGiANX.png',
        'ذكر',
        'متزوج',
        2,
        'راعي',
        '150.80',
        'حلب',
        'منطقة الباب',
        'جانب صيدلية أب محمود',
        [
            {
                id: 1,
                name: 'تعليم'
            }
        ],
        'twfekajeneh@gmail.com',
        'ما بيشكي من شي',
        'عندو سكن',
        'زلمة محترم وابن عالم وناس',
        'مقبول',
        [
            {
                id: 1,
                name: 'مبادرة',
                type: 'عام'
            }
        ]
    ),
    new Beneficiary(
        4, 
        'سامر الغنمة',
        '01010482314',
        '1986-8-2',
        '0988311840',
        'https://imgur.com/lpGiANX.png',
        'ذكر',
        'متزوج',
        2,
        'راعي',
        '150.80',
        'حلب',
        'منطقة الباب',
        'جانب صيدلية أب محمود',
        [
            {
                id: 1,
                name: 'تعليم'
            }
        ],
        'twfekajeneh@gmail.com',
        'ما بيشكي من شي',
        'عندو سكن',
        'زلمة محترم وابن عالم وناس',
        'مقبول',
        [
            {
                id: 1,
                name: 'مبادرة',
                type: 'عام'
            }
        ]
    ),
    new Beneficiary(
        5, 
        'سامر الغنمة',
        '01010482314',
        '1986-8-2',
        '0988311840',
        'https://imgur.com/lpGiANX.png',
        'ذكر',
        'متزوج',
        2,
        'راعي',
        '150.80',
        'حلب',
        'منطقة الباب',
        'جانب صيدلية أب محمود',
        [
            {
                id: 1,
                name: 'تعليم'
            }
        ],
        'twfekajeneh@gmail.com',
        'ما بيشكي من شي',
        'عندو سكن',
        'زلمة محترم وابن عالم وناس',
        'مقبول',
        [
            {
                id: 1,
                name: 'مبادرة',
                type: 'عام'
            }
        ]
    ),
    new Beneficiary(
        6, 
        'سامر الغنمة',
        '01010482314',
        '2001-8-2',
        '0988311840',
        'https://imgur.com/lpGiANX.png',
        'انثى',
        'متزوج',
        2,
        'راعي',
        '150.80',
        'دمشق',
        'منطقة الباب',
        'جانب صيدلية أب محمود',
        [
            {
                id: 1,
                name: 'تعليم'
            }
        ],
        'twfekajeneh@gmail.com',
        'ما بيشكي من شي',
        'عندو سكن',
        'زلمة محترم وابن عالم وناس',
        'معلق',
        [
            {
                id: 1,
                name: 'مبادرة',
                type: 'عام'
            }
        ]
    ),
    new Beneficiary(
        7, 
        'بلال الغنمة',
        '01010482314',
        '1986-8-2',
        '0988311840',
        'https://imgur.com/lpGiANX.png',
        'ذكر',
        'متزوج',
        2,
        'راعي',
        '150.80',
        'حلب',
        'منطقة الباب',
        'جانب صيدلية أب محمود',
        [
            {
                id: 1,
                name: 'تعليم'
            }
        ],
        'twfekajeneh@gmail.com',
        'ما بيشكي من شي',
        'عندو سكن',
        'زلمة محترم وابن عالم وناس',
        'مرفوض',
        [
            {
                id: 1,
                name: 'مبادرة',
                type: 'عام'
            }
        ]
    ),
];

export const employees = [
    new Employee(
        1 ,
        'أسامة بازو',
        '01014524788',
        'osamaBazo@gmail.com',
        '0988311840',
        'https://imgur.com/lpGiANX.png',
        '2001-10-18',
        'ذكر',
        'متطوع',
        'مدير مشاريع',
        'دمشق',
        'منطقة الشعلان',
        'جانب صيدلية أب عبدو',
        'مقبول',
        'موظف خلوق و مهذب'
    ),
    new Employee(
        2 ,
        'توفيق بازو',
        '01014524788',
        'osamaBazo@gmail.com',
        '0988311840',
        'https://imgur.com/lpGiANX.png',
        '2001-10-18',
        'ذكر',
        'متطوع',
        'موظف',
        'دمشق',
        'منطقة الشعلان',
        'جانب صيدلية أب عبدو',
        'معلق',
        'موظف خلوق و مهذب'
    ),
    new Employee(
        3 ,
        'أسامة بازو',
        '01014524788',
        'osamaBazo@gmail.com',
        '0988311840',
        'https://imgur.com/lpGiANX.png',
        '2001-10-18',
        'ذكر',
        'متطوع',
        'مدير مشاريع',
        'دمشق',
        'منطقة الشعلان',
        'جانب صيدلية أب عبدو',
        'مقبول',
        'موظف خلوق و مهذب'
    ),
    new Employee(
        4 ,
        'أسامة بازو',
        '01014524788',
        'osamaBazo@gmail.com',
        '0988311840',
        'https://imgur.com/lpGiANX.png',
        '2001-10-18',
        'ذكر',
        'متطوع',
        'مدير مشاريع',
        'دمشق',
        'منطقة الشعلان',
        'جانب صيدلية أب عبدو',
        'مقبول',
        'موظف خلوق و مهذب'
    ),
    new Employee(
        5 ,
        'أسامة بازو',
        '01014524788',
        'osamaBazo@gmail.com',
        '0988311840',
        'https://imgur.com/lpGiANX.png',
        '2001-10-18',
        'ذكر',
        'متطوع',
        'مدير مشاريع',
        'دمشق',
        'منطقة الشعلان',
        'جانب صيدلية أب عبدو',
        'مقبول',
        'موظف خلوق و مهذب'
    ),
    new Employee(
        6 ,
        'أسامة بازو',
        '01014524788',
        'osamaBazo@gmail.com',
        '0988311840',
        'https://imgur.com/lpGiANX.png',
        '2001-10-18',
        'ذكر',
        'متطوع',
        'مدير مشاريع',
        'دمشق',
        'منطقة الشعلان',
        'جانب صيدلية أب عبدو',
        'مقبول',
        'موظف خلوق و مهذب'
    ),
    new Employee(
        7 ,
        'أسامة بازو',
        '01014524788',
        'osamaBazo@gmail.com',
        '0988311840',
        'https://imgur.com/lpGiANX.png',
        '2001-10-18',
        'ذكر',
        'متطوع',
        'مدير مشاريع',
        'دمشق',
        'منطقة الشعلان',
        'جانب صيدلية أب عبدو',
        'مقبول',
        'موظف خلوق و مهذب'
    ),
    new Employee(
        8 ,
        'أسامة بازو',
        '01014524788',
        'osamaBazo@gmail.com',
        '0988311840',
        'https://imgur.com/lpGiANX.png',
        '2001-10-18',
        'ذكر',
        'متطوع',
        'مدير مشاريع',
        'دمشق',
        'منطقة الشعلان',
        'جانب صيدلية أب عبدو',
        'مقبول',
        'موظف خلوق و مهذب'
    ),
    new Employee(
        9 ,
        'أسامة بازو',
        '01014524788',
        'osamaBazo@gmail.com',
        '0988311840',
        'https://imgur.com/lpGiANX.png',
        '2001-10-18',
        'ذكر',
        'متطوع',
        'مدير مشاريع',
        'دمشق',
        'منطقة الشعلان',
        'جانب صيدلية أب عبدو',
        'مقبول',
        'موظف خلوق و مهذب'
    ),
    new Employee(
        10 ,
        'أسامة بازو',
        '01014524788',
        'osamaBazo@gmail.com',
        '0988311840',
        'https://imgur.com/lpGiANX.png',
        '2001-10-18',
        'ذكر',
        'متطوع',
        'مدير مشاريع',
        'دمشق',
        'منطقة الشعلان',
        'جانب صيدلية أب عبدو',
        'مقبول',
        'موظف خلوق و مهذب'
    ),
];