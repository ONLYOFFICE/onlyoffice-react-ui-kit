/*
* (c) Copyright Ascensio System SIA 2024
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

import React from "react";
import Link from "next/link";
import "./social-links.scss";

const SocialLinks = ({ t, blogHrefLang, currentLocale, handlerSetModal }) => {
  return (
    <ul className={`oo-fm-social-links ${currentLocale}`}>
      <li>
        <div onClick={() => handlerSetModal()} className="oo-fm-social-link" title={t("Subscribe to our newsletters")}>
          <span className="oo-fm-social-link-icon oo-fm-social-link-icon--subscribe-mail" title={t("Subscribe to our newsletters")}></span>
        </div>
      </li>
      <li>
        <Link className="oo-fm-social-link" href={blogHrefLang} title={t("Read our blog")} target="_blank" rel="noreferrer noopener">
          <span className="oo-fm-social-link-icon oo-fm-social-link-icon--blog" title={t("Blog")}></span>
        </Link>
      </li>
      <li>
        <Link className="oo-fm-social-link" href={t("https://twitter.com/ONLY_OFFICE")} title={t("Follow us on Twitter")} target="_blank" rel="noreferrer noopener">
          <span className="oo-fm-social-link-icon oo-fm-social-link-icon--twitter" title={t("Twitter")}></span>
        </Link>
      </li>
      {currentLocale === "ja" && (
        <>
          <li>
            <Link className="oo-fm-social-link" href="https://note.com/onlyoffice/" title="Note でフォロー" target="_blank" rel="noreferrer noopener">
              <span className="oo-fm-social-link-icon oo-fm-social-link-icon--note" title="Note"></span>
            </Link>
          </li>
          <li>
            <Link className="oo-fm-social-link" href="https://qiita.com/ONLYOFFICE" title="Qiita でフォロー" target="_blank" rel="noreferrer noopener">
              <span className="oo-fm-social-link-icon oo-fm-social-link-icon--qiita" title="Qiita"></span>
            </Link>
          </li>
        </>
      )}
      <li>
        <Link className="oo-fm-social-link" href="https://discord.gg/pDuWma6uM7" title={t("Follow us on Discord")} target="_blank" rel="noreferrer noopener">
          <span className="oo-fm-social-link-icon oo-fm-social-link-icon--discord" title={t("Discord")}></span>
        </Link>
      </li>
      <li>
        <Link className="oo-fm-social-link" href="https://www.youtube.com/user/onlyofficeTV" title={t("Follow us on YouTube")} target="_blank" rel="noreferrer noopener">
          <span className="oo-fm-social-link-icon oo-fm-social-link-icon--youtube" title={t("YouTube")}></span>
        </Link>
      </li>
      <li>
        <Link className="oo-fm-social-link" href={t("https://www.tiktok.com/@only_office")} title={t("Follow us on TikTok")} target="_blank" rel="noreferrer noopener">
          <span className="oo-fm-social-link-icon oo-fm-social-link-icon--tiktok" title={t("TikTok")}></span>
        </Link>
      </li>
      <li>
        <Link className="oo-fm-social-link" href="https://github.com/ONLYOFFICE/" title={t("Follow us on GitHub")} target="_blank" rel="noreferrer noopener">
          <span className="oo-fm-social-link-icon oo-fm-social-link-icon--github" title={t("GitHub")}></span>
        </Link>
      </li>
      <li>
        <Link className="oo-fm-social-link" href={t("https://www.linkedin.com/company/ascensio-system-sia/")} title={t("Follow us on LinkedIn")} target="_blank" rel="noreferrer noopener">
          <span className="oo-fm-social-link-icon oo-fm-social-link-icon--linkedin" title={t("LinkedIn")}></span>
        </Link>
      </li>
      {(currentLocale !== "zh" && currentLocale !== "zh-hans") && (
        <li>
          <Link className="oo-fm-social-link" href="https://www.facebook.com/pages/OnlyOffice/833032526736775" title={t("Follow us on Facebook")} target="_blank" rel="noreferrer noopener">
            <span className="oo-fm-social-link-icon oo-fm-social-link-icon--facebook" title={t("Facebook")}></span>
          </Link>
        </li>
      )}
      <li>
        <Link className="oo-fm-social-link" href="https://medium.com/onlyoffice" title={t("Follow us on Medium")} target="_blank" rel="noreferrer noopener">
          <span className="oo-fm-social-link-icon oo-fm-social-link-icon--medium" title={t("Medium")}></span>
        </Link>
      </li>
      <li>
        <Link className="oo-fm-social-link" href="https://fosstodon.org/@ONLYOFFICE" title={t("Follow us on Fosstodon")} target="_blank" rel="noreferrer noopener">
          <span className="oo-fm-social-link-icon oo-fm-social-link-icon--fosstodon" title={t("Fosstodon")}></span>
        </Link>
      </li>
      {(currentLocale === "zh" || currentLocale === "zh-hans") && (
        <div className="oo-fm-icon-item">
          <span className="oo-fm-wdgt-wechat" title="WeChat"></span>
          <div className="oo-fm-popup-qr-code oo-fm-popup-qr-code--wechat">
            <p>关注我们</p>
            <p>了解ONLYOFFICE最新信息</p>
          </div>
        </div>
      )}
      {(currentLocale !== "zh" && currentLocale !== "zh-hans") && (
        <li>
          <Link className="oo-fm-social-link" href="https://t.me/onlyofficeofficial" title={t("Follow us on Telegram")} target="_blank" rel="noreferrer noopener">
            <span className="oo-fm-social-link-icon oo-fm-social-link-icon--telegram" title={t("Telegram")}></span>
          </Link>
        </li>
      )}
      {currentLocale === "ru" && (
         <li>
         <Link className="oo-fm-social-link" href="https://vk.com/onlyoffice" title={t("Следите за нашими новостями Вконтакте")} target="_blank" rel="noreferrer noopener">
           <span className="oo-fm-social-link-icon oo-fm-social-link-icon--vk" title={t("Instagram")}></span>
         </Link>
       </li>
      )}
      {(currentLocale !== "zh" && currentLocale !== "zh-hans") && (
        <li>
          <Link className="oo-fm-social-link" href="https://www.instagram.com/the_onlyoffice/" title={t("Follow us on Instagram")} target="_blank" rel="noreferrer noopener">
            <span className="oo-fm-social-link-icon oo-fm-social-link-icon--instagram" title={t("Instagram")}></span>
          </Link>
        </li>
      )}
      {(currentLocale === "zh" || currentLocale === "zh-hans") && (
        <>
          <li>
            <Link className="oo-fm-social-link" href="https://v.kuaishou.com/GeXfVT" title="在Kuaishou上关注我们" target="_blank" rel="noreferrer noopener">
              <span className="oo-fm-social-link-icon oo-fm-social-link-icon--kuaishou" title="Kuaishou"></span>
            </Link>
          </li>
          <li>
            <Link className="oo-fm-social-link" href="https://www.xiaohongshu.com/user/profile/627e271800000000210253ec" title="在Xiaohongshu上关注我们" target="_blank" rel="noreferrer noopener">
              <span className="oo-fm-social-link-icon oo-fm-social-link-icon--xiaohongshu" title="Xiaohongshu"></span>
            </Link>
          </li>
          <li>
            <Link className="oo-fm-social-link" href="https://blog.csdn.net/m0_68274698" title="在CSDN上关注我们" target="_blank" rel="noreferrer noopener">
              <span className="oo-fm-social-link-icon oo-fm-social-link-icon--csdn" title="CSDN"></span>
            </Link>
          </li>
          <li>
            <Link className="oo-fm-social-link" href="https://www.toutiao.com/c/user/token/MS4wLjABAAAAituLIinbu_T7phDvBDiqiVsev4z3kjH95MZsEpnq7Lv2MnXBh-Sp9tuAHzFnI-Tk/" title="在Toutiao上关注我们" target="_blank" rel="noreferrer noopener">
              <span className="oo-fm-social-link-icon oo-fm-social-link-icon--toutiao" title="Toutiao"></span>
            </Link>
          </li>
          <li>
            <Link className="oo-fm-social-link" href="https://space.bilibili.com/1870911731" title="在Bilibili上关注我们" target="_blank" rel="noreferrer noopener">
              <span className="oo-fm-social-link-icon oo-fm-social-link-icon--bilibili" title="Bilibili"></span>
            </Link>
          </li>
        </>
      )}
    </ul>
  );
};

export default SocialLinks;