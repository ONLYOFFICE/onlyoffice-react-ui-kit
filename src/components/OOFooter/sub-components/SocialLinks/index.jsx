/*
 * (c) Copyright Ascensio System SIA 2024-2025
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React, { useState } from "react";
import clsx from "clsx";
import "./SocialLinks.scss";
import { Link } from "../../../../sub-components/Link/index.jsx";
import { MailPopup } from "../../sub-components/MailPopup/index.jsx";
import { getLink } from "../../../../utils/getLink.jsx";

const SocialLinks = ({ t, locale, mailApiUrl, mailApiType }) => {
  const [popupIsOpen, setPopupIsOpen] = useState(false);

  return (
    <ul className={clsx("oo-footer-social-links", locale)}>
      <li>
        <button
          onClick={() => setPopupIsOpen(true)}
          className="oo-footer-social-link"
          title={t("SubscribeToOurNewsletters")}
        >
          <span
            className="oo-footer-social-link-icon oo-footer-social-link-icon--subscribe-mail"
            title={t("SubscribeToOurNewsletters")}
          ></span>
        </button>
        <MailPopup
          t={t}
          locale={locale}
          popupIsOpen={popupIsOpen}
          setPopupIsOpen={setPopupIsOpen}
          mailApiUrl={mailApiUrl || null}
          mailApiType={mailApiType || null}
        />
      </li>
      <li>
        <Link
          className="oo-footer-social-link"
          href={getLink("blog", locale)}
          title={t("ReadOurBlog")}
          target="_blank"
          rel="noreferrer noopener"
        >
          <span
            className="oo-footer-social-link-icon oo-footer-social-link-icon--blog"
            title={t("Blog")}
          ></span>
        </Link>
      </li>
      <li>
        <Link
          className="oo-footer-social-link"
          href={t("XSocialLink")}
          title={t("FollowUsOnX")}
          target="_blank"
          rel="noreferrer noopener"
        >
          <span
            className="oo-footer-social-link-icon oo-footer-social-link-icon--x"
            title={t("X")}
          ></span>
        </Link>
      </li>
      {locale === "ja" && (
        <>
          <li>
            <Link
              className="oo-footer-social-link"
              href="https://note.com/onlyoffice/"
              title="Note でフォロー"
              target="_blank"
              rel="noreferrer noopener"
            >
              <span
                className="oo-footer-social-link-icon oo-footer-social-link-icon--note"
                title="Note"
              ></span>
            </Link>
          </li>
          <li>
            <Link
              className="oo-footer-social-link"
              href="https://qiita.com/ONLYOFFICE"
              title="Qiita でフォロー"
              target="_blank"
              rel="noreferrer noopener"
            >
              <span
                className="oo-footer-social-link-icon oo-footer-social-link-icon--qiita"
                title="Qiita"
              ></span>
            </Link>
          </li>
        </>
      )}
      <li>
        <Link
          className="oo-footer-social-link"
          href="https://discord.gg/Hcgtf5n4uF"
          title={t("FollowUsOnDiscord")}
          target="_blank"
          rel="noreferrer noopener"
        >
          <span
            className="oo-footer-social-link-icon oo-footer-social-link-icon--discord"
            title={t("Discord")}
          ></span>
        </Link>
      </li>
      <li>
        <Link
          className="oo-footer-social-link"
          href="https://www.youtube.com/user/onlyofficeTV"
          title={t("FollowUsOnYouTube")}
          target="_blank"
          rel="noreferrer noopener"
        >
          <span
            className="oo-footer-social-link-icon oo-footer-social-link-icon--youtube"
            title={t("YouTube")}
          ></span>
        </Link>
      </li>
      <li>
        <Link
          className="oo-footer-social-link"
          href={t("TikTokSocialLink")}
          title={t("FollowUsOnTikTok")}
          target="_blank"
          rel="noreferrer noopener"
        >
          <span
            className="oo-footer-social-link-icon oo-footer-social-link-icon--tiktok"
            title={t("TikTok")}
          ></span>
        </Link>
      </li>
      <li>
        <Link
          className="oo-footer-social-link"
          href="https://github.com/ONLYOFFICE/"
          title={t("FollowUsOnGitHub")}
          target="_blank"
          rel="noreferrer noopener"
        >
          <span
            className="oo-footer-social-link-icon oo-footer-social-link-icon--github"
            title={t("GitHub")}
          ></span>
        </Link>
      </li>
      <li>
        <Link
          className="oo-footer-social-link"
          href={t("LinkedInSocialLink")}
          title={t("FollowUsOnLinkedIn")}
          target="_blank"
          rel="noreferrer noopener"
        >
          <span
            className="oo-footer-social-link-icon oo-footer-social-link-icon--linkedin"
            title={t("LinkedIn")}
          ></span>
        </Link>
      </li>
      {locale !== "zh" && locale !== "zh-hans" && (
        <li>
          <Link
            className="oo-footer-social-link"
            href="https://www.facebook.com/pages/OnlyOffice/833032526736775"
            title={t("FollowUsOnFacebook")}
            target="_blank"
            rel="noreferrer noopener"
          >
            <span
              className="oo-footer-social-link-icon oo-footer-social-link-icon--facebook"
              title={t("Facebook")}
            ></span>
          </Link>
        </li>
      )}
      <li>
        <Link
          className="oo-footer-social-link"
          href="https://medium.com/onlyoffice"
          title={t("FollowUsOnMedium")}
          target="_blank"
          rel="noreferrer noopener"
        >
          <span
            className="oo-footer-social-link-icon oo-footer-social-link-icon--medium"
            title={t("Medium")}
          ></span>
        </Link>
      </li>
      <li>
        <Link
          className="oo-footer-social-link"
          href="https://fosstodon.org/@ONLYOFFICE"
          title={t("FollowUsOnFosstodon")}
          target="_blank"
          rel="noreferrer noopener"
        >
          <span
            className="oo-footer-social-link-icon oo-footer-social-link-icon--fosstodon"
            title={t("Fosstodon")}
          ></span>
        </Link>
      </li>
      {(locale === "zh" || locale === "zh-hans") && (
        <div className="oo-footer-icon-item">
          <span className="oo-footer-wdgt-wechat" title="WeChat"></span>
          <div className="oo-footer-popup-qr-code oo-footer-popup-qr-code--wechat">
            <p>关注我们</p>
            <p>了解ONLYOFFICE最新信息</p>
          </div>
        </div>
      )}
      {locale !== "zh" && locale !== "zh-hans" && (
        <li>
          <Link
            className="oo-footer-social-link"
            href={t("TelegramSocialLink")}
            title={t("FollowUsOnTelegram")}
            target="_blank"
            rel="noreferrer noopener"
          >
            <span
              className="oo-footer-social-link-icon oo-footer-social-link-icon--telegram"
              title={t("Telegram")}
            ></span>
          </Link>
        </li>
      )}
      {locale === "ru" && (
        <li>
          <Link
            className="oo-footer-social-link"
            href="https://vk.com/onlyoffice"
            title="Следите за нашими новостями Вконтакте"
            target="_blank"
            rel="noreferrer noopener"
          >
            <span
              className="oo-footer-social-link-icon oo-footer-social-link-icon--vk"
              title="Вконтакте"
            ></span>
          </Link>
        </li>
      )}
      {locale !== "zh" && locale !== "zh-hans" && (
        <li>
          <Link
            className="oo-footer-social-link"
            href="https://www.instagram.com/the_onlyoffice/"
            title={t("FollowUsOnInstagram")}
            target="_blank"
            rel="noreferrer noopener"
          >
            <span
              className="oo-footer-social-link-icon oo-footer-social-link-icon--instagram"
              title={t("Instagram")}
            ></span>
          </Link>
        </li>
      )}
      {(locale === "zh" || locale === "zh-hans") && (
        <>
          <li>
            <Link
              className="oo-footer-social-link"
              href="https://v.kuaishou.com/GeXfVT"
              title="在Kuaishou上关注我们"
              target="_blank"
              rel="noreferrer noopener"
            >
              <span
                className="oo-footer-social-link-icon oo-footer-social-link-icon--kuaishou"
                title="Kuaishou"
              ></span>
            </Link>
          </li>
          <li>
            <Link
              className="oo-footer-social-link"
              href="https://weibo.com/u/7989605631"
              title="在Weibo上关注我们"
              target="_blank"
              rel="noreferrer noopener"
            >
              <span
                className="oo-footer-social-link-icon oo-footer-social-link-icon--weibo"
                title="Weibo"
              ></span>
            </Link>
          </li>
          <li>
            <Link
              className="oo-footer-social-link"
              href="https://blog.csdn.net/m0_68274698"
              title="在CSDN上关注我们"
              target="_blank"
              rel="noreferrer noopener"
            >
              <span
                className="oo-footer-social-link-icon oo-footer-social-link-icon--csdn"
                title="CSDN"
              ></span>
            </Link>
          </li>
          <li>
            <Link
              className="oo-footer-social-link"
              href="https://www.toutiao.com/c/user/token/MS4wLjABAAAAituLIinbu_T7phDvBDiqiVsev4z3kjH95MZsEpnq7Lv2MnXBh-Sp9tuAHzFnI-Tk/"
              title="在Toutiao上关注我们"
              target="_blank"
              rel="noreferrer noopener"
            >
              <span
                className="oo-footer-social-link-icon oo-footer-social-link-icon--toutiao"
                title="Toutiao"
              ></span>
            </Link>
          </li>
          <li>
            <Link
              className="oo-footer-social-link"
              href="https://space.bilibili.com/1870911731"
              title="在Bilibili上关注我们"
              target="_blank"
              rel="noreferrer noopener"
            >
              <span
                className="oo-footer-social-link-icon oo-footer-social-link-icon--bilibili"
                title="Bilibili"
              ></span>
            </Link>
          </li>
        </>
      )}
    </ul>
  );
};

export { SocialLinks };
