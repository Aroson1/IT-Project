import React, { useState } from "react";
import cn from "classnames";
import AppLink from "../AppLink";
import Group from "./Group";
import Form from "../Form";
import Theme from "../Theme";
import Image from "../Image";

import styles from "./Footer.module.sass";
import {ACTIVE_INDEX} from "../../utils/constants/appConstants";

const items = [
  {
    title: "Info",
    menu: [
      {
        title: "Search",
        url: `/search/${ACTIVE_INDEX}`,
      },
      {
        title: "Create item",
        url: "/upload-details",
      },
    ],
  },
];

const Footers = ({navigation}) => {
  const [email, setEmail] = useState("");

  return (
    <footer className={styles.footer}>
      <div className={cn("container", styles.container)}>
        <div className={styles.row}>
          <div className={styles.col}>
            <AppLink className={styles.logo} href="/">
              <Image
                className={styles.pic}
                src={navigation['logo']?.imgix_url}
                srcDark={navigation['logo']?.imgix_url}
                alt="Logo"
              />
            </AppLink>
            <div className={styles.info}>The New Creative Economy.</div>
            <div className={styles.version}>
              <div className={styles.details}>Dark theme</div>
              <Theme className="theme-big" />
            </div>
          </div>
          <div className={styles.col}>
            {items?.map((x, index) => (
              <Group className={styles.group} item={x} key={index} />
            ))}
          </div>
          <div className={styles.col}>
            <div className={styles.category}>Join Newsletter</div>
            <div className={styles.text}>
              Subscribe our newsletter to get more free design course and
              resource
            </div>
            <Form
              className={styles.form}
              value={email}
              setValue={setEmail}
              placeholder="Enter your email"
              type="email"
              name="email"
            />
          </div>
        </div>
        <div className={styles.foot}>
          <div className={styles.note}>
            We use cookies for better service. <AppLink href="/#">Accept</AppLink>
          </div>
        </div>
      </div>
      <AppLink
              target='_blank'
              href={`https://www.cosmicjs.com`}
          >
          <div className={styles.copyright}>
            <p className={styles.powered}>
              Powered by{' '}
            </p>
            <span className={styles.cosmic}>
              <Image src='/cosmic.svg' alt="Cosmic Logo" />
            </span>
          </div>
        </AppLink>
    </footer>
  );
};

export default Footers;