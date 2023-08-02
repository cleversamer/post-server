const { APP_NAME, SUPPORT_EMAIL } = require("./server");

module.exports.auth = {
  user: "thedev.samer@gmail.com",
  password: process.env["EMAIL_PRIVATE_KEY"],
  emailURL: "#",
  siteDomains: {
    verifyEmail: "#",
  },
};

module.exports.types = {
  welcoming: {
    subject: {
      en: `Welcome to ${APP_NAME}`,
      ar: `أهلاً بك في ${APP_NAME}`,
    },
    emailBody: {
      title: {
        en: (name) => `
          <div style="margin: 0; padding: 0; font-size: 15px; font-weight: 400; text-align: left; color: #000;">
            <span>Hello <span style="font-weight: 700;">${name}</span>,</span>

            <br />
            <br />
            
            <span>
              We are excited to welcome you to <span style="font-weight: 700;">${APP_NAME}</span>!
              Our team has been hard at work to create an application that is easy to use, helpful and
              enjoyable for our users. We are thrilled that you have decided to join us!
            </span>

            <br />
            <br />

            <span>
              <span style="font-weight: 700;">${APP_NAME}</span> is designed to [briefly describe what
              your app does and how it can help the user]. Our mission is to [describe your mission statement].
            </span>

            <br />
            <br />

            <span>
              To get started, simply [provide instructions for how to use your app or a link to a user guide].
              We suggest exploring our app and all of its features, so you can get the most out of it. Don't
              hesitate to let us know if you have any questions or feedback, we're always here to help.
            </span>

            <br />
            <br />

            <span>
              We would love for you to connect with us on social media to stay updated on the latest news
              and promotions. You can follow us on [list your social media channels with links].
            </span>

            <br />
            <br />

            <span>
              Thank you for choosing <span style="font-weight: 700;">${APP_NAME}</span>. We hope that
              you enjoy using it and that it makes your life easier and more enjoyable. If you have any
              questions, please don't hesitate to contact us at
              <a href="mailto:${SUPPORT_EMAIL}" target="_blank">our support email.</a>
            </span>
            
            <br />
            <br />
            
            <span style="font-size: 15px; font-weight: 400; text-align: left; color: #000;">
              Best regards,
            </span>
            
            <br />
            
            <span style="font-size: 15px; font-weight: 700; text-align: left; color: #000;">
              ${APP_NAME} Team
            </span>
          </div>
        `,

        ar: (name) => `
          <div dir="rtl" style="margin: 0; padding: 0; font-size: 15px; font-weight: 400; text-align: right; color: #000;">
            <span>مرحبًا بك <span style="font-weight: 700;">${name}</span>،</span>

            <br />
            <br />
            
            <span>
              يسعدنا أن نرحب بك في <span style="font-weight: 700;">${APP_NAME}</span>!
              لقد عمل فريقنا بجد لإنشاء تطبيق سهل الإستخدام ومفيد وممتع لمستخدمينا.
            </span>

            <br />
            <br />

            <span>
              تم تصميم <span style="font-weight: 700;">${APP_NAME}</span> لكي
              [تصف بإيجاز ما يفعله تطبيقك وكيف يمكن أن يساعد المستخدم].
              مهمتنا هي [وصف بيان مهمتك].
            </span>

            <br />
            <br />

            <span>
              للبدء، ما عليك سوى [تقديم إرشادات حول كيفية إستخدام تطبيقك أو رابط إلى دليل المستخدم].
              نقترح إستكشاف تطبيقنا وجميع ميزاته، حتى تتمكن من تحقيق أقصى إستفادة منه.
              لا تتردد في إخبارنا إذا كان لديك أيّ أسئلة أو تعليقات، فنحن دائمًا هنا لمساعدتك.
            </span>

            <br />
            <br />

            <span>
              نود أن تتواصل معنا على وسائل التواصل الاجتماعي لتبقى على إطّلاع بآخر الأخبار والعروض الترويجيّة.
              يمكنك متابعتنا على [سرد قنوات التواصل الاجتماعي الخاصة بك مع الروابط].
            </span>

            <br />
            <br />

            <span>
              شكرًا لإختيارك <span style="font-weight: 700;">${APP_NAME}</span>.
              نأمل أن تستمتع بإستخدامه وأن يجعل حياتك أكثر سهولة ومتعة.
              إذا كانت لديك أيّ أسئلة، فالرجاء عدم التردد في الإتصال بنا على
              <a href="mailto:${SUPPORT_EMAIL}" target="_blank">بريد فريق الدعم.</a>
            </span>
            
            <br />
            <br />
            
            <span style="font-size: 15px; font-weight: 500; text-align: right; color: #000;">
              أطيب التحيّات،
            </span>
            
            <br />

            <span style="font-size: 15px; font-weight: 700; text-align: right; color: #000;">
              فريق عمل ${APP_NAME}
            </span>
        </div>
        `,
      },
      greeting: {
        en: "Dear",
        ar: "عزيزي",
      },
    },
  },
};

module.exports.getMessage = (email, html, subject) => ({
  from: APP_NAME,
  to: email,
  html,
  subject,
});
