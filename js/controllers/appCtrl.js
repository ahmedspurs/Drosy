angular.module("myApp")

// languageSec

.controller("appCtrl",function($scope,$rootScope){
$rootScope.ev = function(event){
    event.preventDefault()
}

    $rootScope.navbar=[
        {
            home:"HOME",store:"COURSES",contact:"LOGIN",brand:"DROOSY"
        },
        {
            home:"الرئيسية",store:"الكورسات",contact:"دخول",brand:"دروسي"
        }
    ]

    $rootScope.about=[
        {
            head:"ABOUT DROOSY" , content:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit debitis adipisci aut pariatur eum quos, eveniet ducimus dolores deleniti tempora mollitia ipsam totam deserunt ex, ea maiores asperiores veritatis aspernatur illo excepturi assumenda officia fugit ipsum. Dolorem architecto vitae dolor."
            ,join:"join us for free"
        }
        ,
        {
            head:"عن دروسي" , content:"هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق"
            ,join:"انضم الينا مجانا"
        }
    ]

    $rootScope.service=[
        {   ser:"What We Do?",
            head:["Free Courses","Best Teachers","Best comunity"],
            content:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit debitis adipisci aut pariatur eum quos, eveniet ducimus dolores deleniti tempora mollitia ipsam totam deserunt ex, ea maiores asperiores veritatis aspernatur illo excepturi assumenda officia fugit ipsum. Dolorem architecto vitae dolor."
        },
        {
         ser:"ماذا نقدم ؟",
            head:["كورسات مجانيه","افضل  المعلمين","المجتمع الافضل"],
            content:"هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق"
        }
    ]
    $rootScope.alt=[
        {
            content:"Get a free certificate if you register this week"
        },
        {
            content:"احصل علي شهادة مجانيه اذا سجلت في هذا الاسبوع"
        }
    ]

  $rootScope.jump=[
      {
          head:"WE ARE THE BEST!",
          content:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit debitis adipisci aut pariatur eum quos, eveniet ducimus dolores deleniti tempora mollitia ipsam totam deserunt ex, ea maiores asperiores veritatis aspernatur illo excepturi assumenda officia fugit ipsum. Dolorem architecto vitae dolor."
          ,button:"Learn More"
    
        }
      ,
      {
          head:"نحن الافضل",
          content:"هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق"
          ,button:"اعرف المزيد"
      }
  ] 

    $rootScope.mostPo=[
        {name:"Full Stack Web Devolepment",teacher:"ABDALLAH NOU ALDAIM",img:"../img/programing/1.jpg"},
        {name:"Learn Python",teacher:"AHMED SPURS",img:"../img/programing/2.jpg"},
        {name:"LEARN C++ FROM SCRATCH",teacher:"IBN HAIDER",img:"../img/programing/3.jpg"},
        {name:"Syber Security",teacher:"AL-NASHIF",img:"../img/programing/4.png"},
        {name:"LEARN C++ FROM SCRATCH",teacher:"IBN HAIDER",img:"../img/programing/1.jpg"},
        {name:"Syber Security",teacher:"AL-NASHIF",img:"../img/programing/2.jpg"},

    ]

    $rootScope.moc=[
        {
            head:"Mots Popular Courses",
            button:"Inroll Now"
        },
        {
            head:"الكورسات الاكثر شعبيه",
            button:"انضم الان"
        }
    ]


    $rootScope.client=[
        {head:"What Our Client Says ?",
            name:["ANN ADAM","AHMED SPURS","OMER MOSA","AL-NASHIF"],
            cn:["USA","SUDAN","INDIA","NETHERLAND"],
            content:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit debitis adipisci aut pariatur eum quos, eveniet ducimus dolores deleniti tempora mollitia ipsam totam deserunt ex, ea maiores asperiores veritatis aspernatur illo excepturi assumenda officia fugit ipsum. Dolorem architecto vitae dolor."
        },
        {
            head:"ماذا يقول عملاؤنا ؟",
            name:["ان محمد","احمد عادل","عمر محمد","الناشف"],
            cn:["الولايات المتحدة","السودان","الهند","هولندا"],
            content:"هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق"
        }
    ]

    $rootScope.sear=[
        {
            head:"search",
            content:["PROGRAMING","MARKITING","MATH","SPORT","READING"]
        },
        {
            head:"بحث",
            content:["البرمجه","التسويق","الرياضيات","الرياضه","القراءة"]
        }
    ]

    $rootScope.view=[
        "View All",
        "عرض الكل"
    ]

    $rootScope.aboutP=[
       { head:"About Course",rate:["ratings","reviews"]},
       { head:"عن الكورس",rate:["تقييم","مراجعه"]}

    ]
    $rootScope.intro=[
        {
            head:"Introduction",
            content:"Lorem ipsum, dolor sit amet consectetur adipisicing eofficia ecto vitae dolor."
,           con:"What You will Learn",
            teacher:"Teacher Quote"
        },
        {
            head:"مقدمه",
            content:"هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى"
            ,con:"ماذا سوف تتعلم",
            teacher:"كلمه الاستاذ"

        }
    ]


    $rootScope.faq=[
        {
            head:"FAQ'S",
            qs:["Can I Get a Job by the end of Course ?","Can I Work on Google by the end of course"],
            content:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit debitis adipisci aut pariatur eum quos, eveniet ducimus dolores deleniti tempora mollitia ipsam totam deserunt ex, ea maiores asperiores veritatis aspernatur illo excepturi assumenda officia fugit ipsum. Dolorem architecto vitae dolor."
        }
        ,  {
            head:"الاسئله الشائعه",
            qs:["  هل استطيع الحصول علي وظيفه في نهايه الكورس" ,"هل استطيع العمل في قوقل في نهايه الكورس "],
            content:"هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق"
        }

    ]
    $rootScope.comments=[
        "Comments",
        "التعليقات"
    ]
    $rootScope.addC=[
        {
            name:"Name",
            comment:"Comment",
            c:"Add Comment"
        },
        {
            name:"الاسم",
            comment:"التلعليق",
            c:"اضف التعليق"
        }
    ]

    $rootScope.modal=[
        {
            login:"Login",rig:"Rigister",input:["Your Name","Your Password","User Name","Re write Password","Your E-mail","Remember Me","forget password ?"],
            or:"or sign in with:",
        },
        {
            login:"تسجيل الدخول",rig:"تسيجل",input:["الاسم","كلمه السر","اسم المستخدم","اعد كتابه كلمه السر","الايميل","تذكرني","هل نسيت كلمه السر ؟"],
            or:"او سجل باستخدام",
        }
    ]
    $rootScope.langInd = 0
    $rootScope.dir='ltr'
    $rootScope.ml='ml'
    $rootScope.mr='mr'
    $rootScope.lang=function(){
        $rootScope.langInd = 0
        $rootScope.dir='ltr'
    }

    $rootScope.langAr=function(){
        $rootScope.langInd = 1
        $rootScope.dir='rtl'
    }


    $rootScope.darkMode = ""
    $rootScope.lable = true
})