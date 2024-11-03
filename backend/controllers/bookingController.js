import Bookings from "../models/Bookings.js";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const createBooking = async (req, res) => {
  const newBooking = new Bookings(req.body);
  try {
    const savedBooking = await newBooking.save();
    console.log(savedBooking);

    const objectId = savedBooking._id;
    const id = objectId.toString();

    const mailOptions = {
      from: "himanshupapola.ph@gmail.com",
      to: `realtrickswizard@gmail.com, ${savedBooking.userEmail}`,
      subject: "WAYRISHI | Booking Confirmation",
      html: `<!DOCTYPE html>

<html
  lang="en"
  xmlns:o="urn:schemas-microsodft-com:office:office"
  xmlns:v="urn:schemas-microsoft-com:vml"
>
  <head>
    <title></title>
    <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
    <style>
      * {
        box-sizing: border-box;
      }

      body {
        margin: 0;
        padding: 0;
      }

      a[x-apple-data-detectors] {
        color: inherit !important;
        text-decoration: inherit !important;
      }

      #MessageViewBody a {
        color: inherit;
        text-decoration: none;
      }

      p {
        line-height: inherit;
      }

      .desktop_hide,
      .desktop_hide table {
        mso-hide: all;
        display: none;
        max-height: 0px;
        overflow: hidden;
      }

      .image_block img + div {
        display: none;
      }

      sup,
      sub {
        font-size: 75%;
        line-height: 0;
      }

      @media (max-width: 670px) {
        .desktop_hide table.icons-inner,
        .social_block.desktop_hide .social-table {
          display: inline-block !important;
        }

        .icons-inner {
          text-align: center;
        }

        .icons-inner td {
          margin: 0 auto;
        }

        .mobile_hide {
          display: none;
        }

        .row-content {
          width: 100% !important;
        }

        .stack .column {
          width: 100%;
          display: block;
        }

        .mobile_hide {
          min-height: 0;
          max-height: 0;
          max-width: 0;
          overflow: hidden;
          font-size: 0px;
        }

        .desktop_hide,
        .desktop_hide table {
          display: table !important;
          max-height: none !important;
        }

        .row-3 .column-1 .block-1.paragraph_block td.pad > div {
          text-align: center !important;
          font-size: 36px !important;
        }

        .row-3 .column-1 .block-1.paragraph_block td.pad,
        .row-3 .column-2 .block-1.paragraph_block td.pad {
          padding: 0 !important;
        }

        .row-3 .column-2 .block-1.paragraph_block td.pad > div {
          text-align: center !important;
          font-size: 14px !important;
        }

        .row-3 .column-1 .block-3.spacer_block {
          height: 20px !important;
        }

        .row-3 .column-1 .block-2.paragraph_block td.pad > div {
          text-align: center !important;
          font-size: 16px !important;
        }

        .row-4 .column-1 .block-3.paragraph_block td.pad > div,
        .row-7 .column-1 .block-3.paragraph_block td.pad > div {
          text-align: center !important;
        }

        .row-4 .column-1 .block-3.paragraph_block td.pad,
        .row-7 .column-1 .block-3.paragraph_block td.pad {
          padding: 5px !important;
        }

        .row-5 .column-1 .block-2.paragraph_block td.pad > div {
          font-size: 15px !important;
        }

        .row-7 .column-1 .block-2.paragraph_block td.pad > div {
          text-align: center !important;
          font-size: 32px !important;
        }

        .row-7 .column-1 .block-2.paragraph_block td.pad {
          padding: 5px 5px 0 !important;
        }

        .row-9 .column-1 .block-1.spacer_block {
          height: 40px !important;
        }

        .row-3 .column-1 {
          padding: 30px 30px 0 !important;
        }

        .row-3 .column-2 {
          padding: 0 30px !important;
        }
      }
    </style>
  </head>
  <body
    class="body forceBgColor"
    style="
      background-color: transparent;
      margin: 0;
      padding: 0;
      -webkit-text-size-adjust: none;
      text-size-adjust: none;
    "
  >
    <table
      border="0"
      cellpadding="0"
      cellspacing="0"
      class="nl-container"
      role="presentation"
      style="
        mso-table-lspace: 0pt;
        mso-table-rspace: 0pt;
        background-color: transparent;
        background-repeat: no-repeat;
        background-image: none;
        background-position: top left;
        background-size: auto;
      "
      width="100%"
    >
      <tbody>
        <tr>
          <td>
            <table
              align="center"
              border="0"
              cellpadding="0"
              cellspacing="0"
              class="row row-1"
              role="presentation"
              style="
                mso-table-lspace: 0pt;
                mso-table-rspace: 0pt;
                background-size: auto;
              "
              width="100%"
            >
              <tbody>
                <tr>
                  <td>
                    <table
                      align="center"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      class="row-content stack"
                      role="presentation"
                      style="
                        mso-table-lspace: 0pt;
                        mso-table-rspace: 0pt;
                        border-radius: 0;
                        color: #000000;
                        background-size: auto;
                        background-color: #ffffff;
                        width: 650px;
                        margin: 0 auto;
                      "
                      width="650"
                    >
                      <tbody>
                        <tr>
                          <td
                            class="column column-1"
                            style="
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              font-weight: 400;
                              text-align: left;
                              vertical-align: top;
                              border-top: 0px;
                              border-right: 0px;
                              border-bottom: 0px;
                              border-left: 0px;
                            "
                            width="100%"
                          >
                            <table
                              border="0"
                              cellpadding="0"
                              cellspacing="0"
                              class="image_block block-1"
                              role="presentation"
                              style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                              "
                              width="100%"
                            >
                              <tr>
                                <td class="pad" style="width: 100%">
                                  <div
                                    align="center"
                                    class="alignment"
                                    style="line-height: 10px"
                                  >
                                    <div style="max-width: 650px">
                                      <img
                                        alt=""
                                        height="auto"
                                        src="https://melodic-horse-c2bba4.netlify.app/images/logo.png"
                                        style="
                                          display: block;
                                          height: auto;
                                          border: 0;
                                          width: 55%;
                                        "
                                        title=""
                                        width="650"
                                      />
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
            <table
              align="center"
              border="0"
              cellpadding="0"
              cellspacing="0"
              class="row row-2"
              role="presentation"
              style="
                mso-table-lspace: 0pt;
                mso-table-rspace: 0pt;
                background-size: auto;
              "
              width="100%"
            >
              <tbody>
                <tr>
                  <td>
                    <table
                      align="center"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      class="row-content stack"
                      role="presentation"
                      style="
                        mso-table-lspace: 0pt;
                        mso-table-rspace: 0pt;
                        border-radius: 0;
                        color: #000000;
                        background-size: auto;
                        background-color: #f6f5f1;
                        width: 650px;
                        margin: 0 auto;
                      "
                      width="650"
                    >
                      <tbody>
                        <tr>
                          <td
                            class="column column-1"
                            style="
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              font-weight: 400;
                              text-align: left;
                              vertical-align: top;
                              border-top: 0px;
                              border-right: 0px;
                              border-bottom: 0px;
                              border-left: 0px;
                            "
                            width="100%"
                          >
                            <table
                              border="0"
                              cellpadding="0"
                              cellspacing="0"
                              class="image_block block-1"
                              role="presentation"
                              style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                              "
                              width="100%"
                            >
                              <tr>
                                <td class="pad" style="width: 100%">
                                  <div
                                    align="center"
                                    class="alignment"
                                    style="line-height: 10px"
                                  >
                                    <div style="max-width: 650px">
                                      <img
                                        alt=""
                                        height="auto"
                                        src="https://luminous-jelly-c11a45.netlify.app/images/BEE_May20_MarketingAgency_Invoice_v01.jpg"
                                        style="
                                          pdislay: block;
                                          height: auto;
                                          border: 0;
                                          width: 100%;
                                        "
                                        title=""
                                        width="650"
                                      />
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
            <table
              align="center"
              border="0"
              cellpadding="0"
              cellspacing="0"
              class="row row-3"
              role="presentation"
              style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
              width="100%"
            >
              <tbody>
                <tr>
                  <td>
                    <table
                      align="center"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      class="row-content stack"
                      role="presentation"
                      style="
                        mso-table-lspace: 0pt;
                        mso-table-rspace: 0pt;
                        background-repeat: no-repeat;
                        border-radius: 0;
                        color: #000000;
                        background-size: auto;
                        background-color: #007c86;
                        background-image: url('images/BEE_May20_MarketingAgency_Invoice_v02.jpg');
                        width: 650px;
                        margin: 0 auto;
                      "
                      width="650"
                    >
                      <tbody>
                        <tr>
                          <td
                            class="column column-1"
                            style="
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              font-weight: 400;
                              text-align: left;
                              padding-bottom: 50px;
                              padding-left: 50px;
                              padding-top: 60px;
                              vertical-align: bottom;
                              border-top: 0px;
                              border-right: 0px;
                              border-bottom: 0px;
                              border-left: 0px;
                            "
                            width="50%"
                          >
                            <table
                              border="0"
                              cellpadding="0"
                              cellspacing="0"
                              class="paragraph_block block-1"
                              role="presentation"
                              style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                                word-break: break-word;
                              "
                              width="100%"
                            >
                              <tr>
                                <td
                                  class="pad"
                                  style="
                                    padding-bottom: 15px;
                                    padding-left: 5px;
                                    padding-right: 5px;
                                  "
                                >
                                  <div
                                    style="
                                      color: #ffffff;
                                      font-family: TimesNewRoman,
                                        'Times New Roman', Times, Beskerville,
                                        Georgia, serif;
                                      font-size: 70px;
                                      font-weight: 400;
                                      letter-spacing: -2px;
                                      line-height: 120%;
                                      text-align: left;
                                      mso-line-height-alt: 84px;
                                    "
                                  >
                                    <p
                                      style="margin: 0; word-break: break-word"
                                    >
                                      <em
                                        ><span
                                          style="
                                            word-break: break-word;
                                            color: #ffffff;
                                          "
                                          >Invoice</span
                                        ></em
                                      >
                                    </p>
                                  </div>
                                </td>
                              </tr>
                            </table>
                            <table
                              border="0"
                              cellpadding="0"
                              cellspacing="0"
                              class="paragraph_block block-2"
                              role="presentation"
                              style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                                word-break: break-word;
                              "
                              width="100%"
                            >
                              <tr>
                                <td class="pad">
                                  <div
                                    style="
                                      color: #ffffff;
                                      direction: ltr;
                                      font-family: 'Helvetica Neue', Helvetica,
                                        Arial, sans-serif;
                                      font-size: 18px;
                                      font-weight: 400;
                                      letter-spacing: 0px;
                                      line-height: 120%;
                                      text-align: left;
                                      mso-line-height-alt: 21.599999999999998px;
                                    "
                                  >
                                    <p style="margin: 0">
                                      #${id}<br />Date: ${new Date().toLocaleDateString()}
                                    </p>
                                  </div>
                                </td>
                              </tr>
                            </table>
                            <div
                              class="spacer_block block-3"
                              style="
                                height: 30px;
                                line-height: 30px;
                                font-size: 1px;
                              "
                            >
                               
                            </div>
                          </td>
                          <td
                            class="column column-2"
                            style="
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              font-weight: 400;
                              text-align: left;
                              padding-bottom: 50px;
                              padding-right: 50px;
                              padding-top: 50px;
                              vertical-align: bottom;
                              border-top: 0px;
                              border-right: 0px;
                              border-bottom: 0px;
                              border-left: 0px;
                            "
                            width="50%"
                          >
                            <table
                              border="0"
                              cellpadding="0"
                              cellspacing="0"
                              class="paragraph_block block-1"
                              role="presentation"
                              style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                                word-break: break-word;
                              "
                              width="100%"
                            >
                              <tr>
                                <td class="pad">
                                  <div
                                    style="
                                      color: #ffffff;
                                      direction: ltr;
                                      font-family: 'Helvetica Neue', Helvetica,
                                        Arial, sans-serif;
                                      font-size: 18px;
                                      font-weight: 400;
                                      letter-spacing: 0px;
                                      line-height: 120%;
                                      text-align: right;
                                      mso-line-height-alt: 21.599999999999998px;
                                    "
                                  >
<p style="margin: 0">
    Bill to: ${savedBooking.fullName}<br />
    Email: <span style="color: white;">${savedBooking.userEmail}</span>
</p>

                                  </div>
                                </td>
                              </tr>
                            </table>
                            <div
                              class="spacer_block block-2"
                              style="
                                height: 30px;
                                line-height: 30px;
                                font-size: 1px;
                              "
                            >
                               
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
            <table
              align="center"
              border="0"
              cellpadding="0"
              cellspacing="0"
              class="row row-5"
              role="presentation"
              style="
                mso-table-lspace: 0pt;
                mso-table-rspace: 0pt;
                background-size: auto;
              "
              width="100%"
            >
              <tbody>
                <tr>
                  <td>
                    <table
                      align="center"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      class="row-content stack"
                      role="presentation"
                      style="
                        mso-table-lspace: 0pt;
                        mso-table-rspace: 0pt;
                        background-color: #f6f5f1;
                        border-radius: 0;
                        color: #000000;
                        background-size: auto;
                        border-left: 30px solid transparent;
                        border-right: 30px solid transparent;
                        width: 650px;
                        margin: 0 auto;
                      "
                      width="650"
                    >
                      <tbody>
                        <tr>
                          <td
                            class="column column-1"
                            style="
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              font-weight: 400;
                              text-align: left;
                              vertical-align: top;
                              border-top: 0px;
                              border-right: 0px;
                              border-bottom: 0px;
                              border-left: 0px;
                            "
                            width="100%"
                          >
                            <table
                              border="0"
                              cellpadding="0"
                              cellspacing="0"
                              class="paragraph_block block-1"
                              role="presentation"
                              style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                                word-break: break-word;
                              "
                              width="100%"
                            >
                              <tr>
                                <td class="pad">
                                  <div
                                    style="
                                      color: #222222;
                                      font-family: TimesNewRoman,
                                        'Times New Roman', Times, Beskerville,
                                        Georgia, serif;
                                      font-size: 24px;
                                      font-weight: 400;
                                      letter-spacing: -1px;
                                      line-height: 120%;
                                      text-align: left;
                                      mso-line-height-alt: 28.799999999999997px;
                                    "
                                  >
                                    <p
                                      style="margin: 0; word-break: break-word"
                                    >
                                      Dear <em>${savedBooking.fullName}</em>,
                                    </p>
                                  </div>
                                </td>
                              </tr>
                            </table>
                            <table
                              border="0"
                              cellpadding="0"
                              cellspacing="0"
                              class="paragraph_block block-2"
                              role="presentation"
                              style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                                word-break: break-word;
                              "
                              width="100%"
                            >
                              <tr>
                                <td class="pad" style="padding-top: 0px">
                                  <div
                                    style="
                                      color: #222222;
                                      direction: ltr;
                                      font-family: 'Helvetica Neue', Helvetica,
                                        Arial, sans-serif;
                                      font-size: 16px;
                                      font-weight: 400;
                                      letter-spacing: 0px;
                                      line-height: 120%;
                                      text-align: left;
                                      mso-line-height-alt: 19.2px;
                                    "
                                  >
                                    <p style="margin: 0">
                                      <p>We’re excited to let you know that your tour has been successfully booked! Get ready for an amazing experience, and please don’t hesitate to reach out if you have any questions or special requests.</p>

                                    <p>Thank you for choosing WayRishi. For furthure details your selected Guide will shortly contact you. We look forward to making your journey unforgettable!</p>

                                    <p>Best regards,<br />
                                    WayRishi Team</p>
                                    </p>
                                  </div>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
            <table
              align="center"
              border="0"
              cellpadding="0"
              cellspacing="0"
              class="row row-6"
              role="presentation"
              style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
              width="100%"
            >
              <tbody>
                <tr>
                  <td>
                    <table
                      align="center"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      class="row-content stack"
                      role="presentation"
                      style="
                        mso-table-lspace: 0pt;
                        mso-table-rspace: 0pt;
                        background-color: #f6f5f1;
                        border-radius: 0;
                        color: #000000;
                        border-left: 20px solid transparent;
                        border-right: 20px solid transparent;
                        border-top: 20px solid transparent;
                        width: 650px;
                        margin: 0 auto;
                      "
                      width="650"
                    >
                      <tbody>
                        <tr>
                          <td
                            class="column column-1"
                            style="
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              font-weight: 400;
                              text-align: left;
                              padding-bottom: 30px;
                              vertical-align: top;
                              border-top: 0px;
                              border-right: 0px;
                              border-bottom: 0px;
                              border-left: 0px;
                            "
                            width="100%"
                          >
                            <table
                              border="0"
                              cellpadding="10"
                              cellspacing="0"
                              class="table_block mobile_hide block-1"
                              role="presentation"
                              style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                              "
                              width="100%"
                            >
                              <tr>
                                <td class="pad">
                                  <table
                                    style="
                                      mso-table-lspace: 0pt;
                                      mso-table-rspace: 0pt;
                                      border-collapse: collapse;
                                      width: 100%;
                                      table-layout: fixed;
                                      direction: ltr;
                                      background-color: #ffffff;
                                      font-family: 'Helvetica Neue', Helvetica,
                                        Arial, sans-serif;
                                      font-weight: 400;
                                      color: #222222;
                                      text-align: right;
                                      letter-spacing: 0px;
                                      word-break: break-all;
                                    "
                                    width="100%"
                                  >
                                    <thead
                                      style="
                                        vertical-align: top;
                                        background-color: #eddab2;
                                        color: #222222;
                                        font-size: 16px;
                                        line-height: 120%;
                                      "
                                    >
                                      <tr>
                                        <th
                                          style="
                                            padding: 10px;
                                            word-break: break-word;
                                            font-weight: 700;
                                            border-top: 1px solid transparent;
                                            border-right: 1px solid transparent;
                                            border-bottom: 1px solid transparent;
                                            border-left: 1px solid transparent;
                                            text-align: right;
                                          "
                                          width="20%"
                                        >
                                          <strong>Destination</strong>
                                        </th>
                                         <th
                                          style="
                                            padding: 10px;
                                            word-break: break-word;
                                            font-weight: 700;
                                            border-top: 1px solid transparent;
                                            border-right: 1px solid transparent;
                                            border-bottom: 1px solid transparent;
                                            border-left: 1px solid transparent;
                                            text-align: right;
                                          "
                                          width="20%"
                                        >
                                          <strong>Guide</strong>
                                        </th>
                                        <th
                                          style="
                                            padding: 10px;
                                            word-break: break-word;
                                            font-weight: 700;
                                            border-top: 1px solid transparent;
                                            border-right: 1px solid transparent;
                                            border-bottom: 1px solid transparent;
                                            border-left: 1px solid transparent;
                                            text-align: right;
                                          "
                                          width="20%"
                                        >
                                          Persons
                                        </th>
                                        <th
                                          style="
                                            padding: 10px;
                                            word-break: break-word;
                                            font-weight: 700;
                                            border-top: 1px solid transparent;
                                            border-right: 1px solid transparent;
                                            border-bottom: 1px solid transparent;
                                            border-left: 1px solid transparent;
                                            text-align: right;
                                          "
                                          width="25%"
                                        >
                                          Phone
                                        </th>
                                        <th
                                          style="
                                            padding: 10px;
                                            word-break: break-word;
                                            font-weight: 700;
                                            border-top: 1px solid transparent;
                                            border-right: 1px solid transparent;
                                            border-bottom: 1px solid transparent;
                                            border-left: 1px solid transparent;
                                            text-align: right;
                                          "
                                          width="20%"
                                        >
                                          Date
                                        </th>
                                      </tr>
                                    </thead>
                                    <tbody
                                      style="
                                        vertical-align: top;
                                        font-size: 14px;
                                        line-height: 120%;
                                      "
                                    >
                                      <tr style="background-color: #f9f9f9">
                                        <td
                                          style="
                                            padding: 10px;
                                            word-break: break-word;
                                            border-top: 1px solid transparent;
                                            border-right: 1px solid transparent;
                                            border-bottom: 1px solid transparent;
                                            border-left: 1px solid transparent;
                                          "
                                          width="20%"
                                        >
                                        ${savedBooking.tourName}
                                        </td>
                                        <td
                                          style="
                                            padding: 10px;
                                            word-break: break-word;
                                            border-top: 1px solid transparent;
                                            border-right: 1px solid transparent;
                                            border-bottom: 1px solid transparent;
                                            border-left: 1px solid transparent;
                                          "
                                          width="20%"
                                        >
                                        ${savedBooking.selectedGuide}
                                        </td>
                                        <td
                                          style="
                                            padding: 10px;
                                            word-break: break-word;
                                            border-top: 1px solid transparent;
                                            border-right: 1px solid transparent;
                                            border-bottom: 1px solid transparent;
                                            border-left: 1px solid transparent;
                                          "
                                          width="20%"
                                        >
                                        ${savedBooking.guestSize}
                                        </td>
                                        <td
                                          style="
                                            padding: 10px;
                                            word-break: break-word;
                                            border-top: 1px solid transparent;
                                            border-right: 1px solid transparent;
                                            border-bottom: 1px solid transparent;
                                            border-left: 1px solid transparent;
                                          "
                                          width="20%"
                                        >
                                        ${savedBooking.phone}
                                        </td>
                                        <td
                                          style="
                                            padding: 10px;
                                            word-break: break-word;
                                            border-top: 1px solid transparent;
                                            border-right: 1px solid transparent;
                                            border-bottom: 1px solid transparent;
                                            border-left: 1px solid transparent;
                                          "
                                          width="20%"
                                        >
                                        ${new Date(
                                          savedBooking.bookAt
                                        ).toLocaleDateString()}
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
            <table
              align="center"
              border="0"
              cellpadding="0"
              cellspacing="0"
              class="row row-7"
              role="presentation"
              style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
              width="100%"
            >
              <tbody>
                <tr>
                  <td>
                    <table
                      align="center"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      class="row-content stack"
                      role="presentation"
                      style="
                        mso-table-lspace: 0pt;
                        mso-table-rspace: 0pt;
                        background-repeat: no-repeat;
                        background-color: #f6f5f1;
                        border-radius: 0;
                        color: #000000;
                        background-image: url('images/BG-yellow_2.jpg');
                        background-size: cover;
                        width: 650px;
                        margin: 0 auto;
                      "
                      width="650"
                    >
                      <tbody>
                        <tr>
                          <td
                            class="column column-1"
                            style="
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              font-weight: 400;
                              text-align: left;
                              padding-bottom: 40px;
                              padding-left: 15px;
                              padding-right: 15px;
                              padding-top: 40px;
                              vertical-align: top;
                              border-top: 0px;
                              border-right: 0px;
                              border-bottom: 0px;
                              border-left: 0px;
                            "
                            width="100%"
                          >
                            <table
                              border="0"
                              cellpadding="0"
                              cellspacing="0"
                              class="image_block block-1"
                              role="presentation"
                              style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                              "
                              width="100%"
                            >
                              <tr>
                                <td class="pad" style="width: 100%">
                                  <div
                                    align="center"
                                    class="alignment"
                                    style="line-height: 10px"
                                  >
                                    <div style="max-width: 28px">
                                      <img
                                        alt=""
                                        height="auto"
                                        src="https://luminous-jelly-c11a45.netlify.app/images/Flower-green_1.png"
                                        style="
                                          display: block;
                                          height: auto;
                                          border: 0;
                                          width: 100%;
                                        "
                                        title=""
                                        width="28"
                                      />
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            </table>
                            <table
                              border="0"
                              cellpadding="0"
                              cellspacing="0"
                              class="paragraph_block block-2"
                              role="presentation"
                              style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                                word-break: break-word;
                              "
                              width="100%"
                            >
                              <tr>
                                <td
                                  class="pad"
                                  style="
                                    padding-left: 25px;
                                    padding-right: 25px;
                                  "
                                >
                                  <div
                                    style="
                                      color: #222222;
                                      font-family: TimesNewRoman,
                                        'Times New Roman', Times, Beskerville,
                                        Georgia, serif;
                                      font-size: 38px;
                                      font-weight: 400;
                                      letter-spacing: -1px;
                                      line-height: 120%;
                                      text-align: center;
                                      mso-line-height-alt: 45.6px;
                                    "
                                  >
                                    <p
                                      style="margin: 0; word-break: break-word"
                                    >
                                      Have<em> questions?</em>
                                    </p>
                                  </div>
                                </td>
                              </tr>
                            </table>
                            <table
                              border="0"
                              cellpadding="0"
                              cellspacing="0"
                              class="paragraph_block block-3"
                              role="presentation"
                              style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                                word-break: break-word;
                              "
                              width="100%"
                            >
                              <tr>
                                <td
                                  class="pad"
                                  style="
                                    padding-bottom: 5px;
                                    padding-left: 25px;
                                    padding-right: 25px;
                                    padding-top: 5px;
                                  "
                                >
                                  <div
                                    style="
                                      color: #222222;
                                      font-family: 'Helvetica Neue', Helvetica,
                                        Arial, sans-serif;
                                      font-size: 15px;
                                      font-weight: 400;
                                      line-height: 150%;
                                      text-align: center;
                                      mso-line-height-alt: 22.5px;
                                    "
                                  >
                                    <p
                                      style="margin: 0; word-break: break-word"
                                    >
                                      We have answers. Get in touch with us via
                                      email, phone or support chat.
                                    </p>
                                  </div>
                                </td>
                              </tr>
                            </table>
                            <table
                              border="0"
                              cellpadding="0"
                              cellspacing="0"
                              class="button_block block-4"
                              role="presentation"
                              style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                              "
                              width="100%"
                            >
                              <tr>
                                <td
                                  class="pad"
                                  style="padding-top: 10px; text-align: center"
                                >
                                  <div align="center" class="alignment">
                                 
                                  <a
                                      href="mailto:himashupapola.ph@gmail.com"
                                      style="
                                        background-color: #222222;
                                        border-bottom: 0px solid transparent;
                                        border-left: 0px solid transparent;
                                        border-radius: 10px;
                                        border-right: 0px solid transparent;
                                        border-top: 0px solid transparent;
                                        color: #ffffff;
                                        display: inline-block;
                                        font-family: 'Helvetica Neue', Helvetica,
                                          Arial, sans-serif;
                                        font-size: 14px;
                                        font-weight: 400;
                                        mso-border-alt: none;
                                        padding-bottom: 5px;
                                        padding-top: 5px;
                                        text-align: center;
                                        text-decoration: none;
                                        width: auto;
                                        word-break: keep-all;
                                      "
                                      target="_blank"
                                      ><span
                                        style="
                                          word-break: break-word;
                                          padding-left: 30px;
                                          padding-right: 30px;
                                          font-size: 14px;
                                          display: inline-block;
                                          letter-spacing: 2px;
                                        "
                                        ><span
                                          style="
                                            margin: 0;
                                            word-break: break-word;
                                            line-height: 28px;
                                          "
                                          >GET IN TOUCH</span
                                        ></span
                                      ></a
                                    >
                                  </div>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
            <table
              align="center"
              border="0"
              cellpadding="0"
              cellspacing="0"
              class="row row-8"
              role="presentation"
              style="
                mso-table-lspace: 0pt;
                mso-table-rspace: 0pt;
                background-size: auto;
              "
              width="100%"
            >
              <tbody>
                <tr>
                  <td>
                    <table
                      align="center"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      class="row-content stack"
                      role="presentation"
                      style="
                        mso-table-lspace: 0pt;
                        mso-table-rspace: 0pt;
                        border-radius: 0;
                        color: #000000;
                        background-size: auto;
                        background-color: #f6f5f1;
                        width: 650px;
                        margin: 0 auto;
                      "
                      width="650"
                    >
                      <tbody>
                        <tr>
                          <td
                            class="column column-1"
                            style="
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              font-weight: 400;
                              text-align: left;
                              vertical-align: top;
                              border-top: 0px;
                              border-right: 0px;
                              border-bottom: 0px;
                              border-left: 0px;
                            "
                            width="100%"
                          >
                            <table
                              border="0"
                              cellpadding="0"
                              cellspacing="0"
                              class="image_block block-1"
                              role="presentation"
                              style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                              "
                              width="100%"
                            >
                              <tr>
                                <td class="pad" style="width: 100%">
                                  <div
                                    align="center"
                                    class="alignment"
                                    style="line-height: 10px"
                                  >
                                    <div style="max-width: 650px">
                                      <img
                                        alt=""
                                        height="auto"
                                        src="https://luminous-jelly-c11a45.netlify.app/images/BEE_May20_MarketingAgency_Invoice_v01.jpg"
                                        style="
                                          display: block;
                                          height: auto;
                                          border: 0;
                                          width: 100%;
                                        "
                                        title=""
                                        width="650"
                                      />
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
            <table
              align="center"
              border="0"
              cellpadding="0"
              cellspacing="0"
              class="row row-9"
              role="presentation"
              style="
                mso-table-lspace: 0pt;
                mso-table-rspace: 0pt;
                background-color: #ffffff;
              "
              width="100%"
            >
              <tbody>
                <tr>
                  <td>
                    <table
                      align="center"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      class="row-content stack"
                      role="presentation"
                      style="
                        mso-table-lspace: 0pt;
                        mso-table-rspace: 0pt;
                        background-color: #007c86;
                        border-radius: 0;
                        color: #000000;
                        width: 650px;
                        margin: 0 auto;
                      "
                      width="650"
                    >
                      <tbody>
                        <tr>
                          <td
                            class="column column-1"
                            style="
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              font-weight: 400;
                              text-align: left;
                              padding-bottom: 15px;
                              padding-left: 20px;
                              padding-right: 20px;
                              padding-top: 15px;
                              vertical-align: top;
                              border-top: 0px;
                              border-right: 0px;
                              border-bottom: 0px;
                              border-left: 0px;
                            "
                            width="100%"
                          >
                            <div
                              class="spacer_block block-1"
                              style="
                                height: 40px;
                                line-height: 40px;
                                font-size: 1px;
                              "
                            >
                               
                            </div>
                            <table
                              border="0"
                              cellpadding="0"
                              cellspacing="0"
                              class="image_block block-2"
                              role="presentation"
                              style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                              "
                              width="100%"
                            >
                              <tr>
                                <td
                                  class="pad"
                                  style="
                                    width: 100%;
                                    padding-right: 0px;
                                    padding-left: 0px;
                                  "
                                >
                                  <div
                                    align="center"
                                    class="alignment"
                                    style="line-height: 10px"
                                  >
                                    <div style="max-width: 191.5px">
                                      <img
                                        alt=""
                                        height="auto"
                                        src="https://melodic-horse-c2bba4.netlify.app/images/logo.png"
                                        style="
                                          display: block;
                                          height: auto;
                                          border: 0;
                                          width: 100%;
                                        "
                                        title=""
                                        width="91.5"
                                      />
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            </table>
                            <table
                              border="0"
                              cellpadding="0"
                              cellspacing="0"
                              class="paragraph_block block-3"
                              role="presentation"
                              style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                                word-break: break-word;
                              "
                              width="100%"
                            >
                              <tr>
                                <td
                                  class="pad"
                                  style="
                                    padding-bottom: 30px;
                                    padding-left: 10px;
                                    padding-right: 10px;
                                    padding-top: 20px;
                                  "
                                >
                                  <div
                                    style="
                                      color: #ffffff;
                                      font-family: 'Helvetica Neue', Helvetica,
                                        Arial, sans-serif;
                                      font-size: 12px;
                                      letter-spacing: 2px;
                                      line-height: 120%;
                                      text-align: center;
                                      mso-line-height-alt: 14.399999999999999px;
                                    "
                                  >
                                    <p
                                      style="margin: 0; word-break: break-word"
                                    >
                                      WAYRISHI PVT. LTD.
                                    </p>
                                  </div>
                                </td>
                              </tr>
                            </table>
                            <table
                              border="0"
                              cellpadding="0"
                              cellspacing="0"
                              class="social_block block-4"
                              role="presentation"
                              style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                              "
                              width="100%"
                            >
                              <tr>
                                <td
                                  class="pad"
                                  style="
                                    padding-bottom: 10px;
                                    text-align: center;
                                    padding-right: 0px;
                                    padding-left: 0px;
                                  "
                                >
                                  <div align="center" class="alignment">
                                    <table
                                      border="0"
                                      cellpadding="0"
                                      cellspacing="0"
                                      class="social-table"
                                      role="presentation"
                                      style="
                                        mso-table-lspace: 0pt;
                                        mso-table-rspace: 0pt;
                                        display: inline-block;
                                      "
                                      width="168px"
                                    >
                                      <tr>
                                        <td style="padding: 0 5px 0 5px">
                                          <a
                                            href="https://www.instagram.com"
                                            target="_blank"
                                            ><img
                                              alt="Instagram"
                                              height="auto"
                                              src="https://luminous-jelly-c11a45.netlify.app/images/instagram2x.png"
                                              style="
                                                display: block;
                                                height: auto;
                                                border: 0;
                                              "
                                              title="Instagram"
                                              width="32"
                                          /></a>
                                        </td>
                                        <td style="padding: 0 5px 0 5px">
                                          <a
                                            href="https://www.facebook.com"
                                            target="_blank"
                                            ><img
                                              alt="Facebook"
                                              height="auto"
                                              src="https://luminous-jelly-c11a45.netlify.app/images/facebook2x.png"
                                              style="
                                                display: block;
                                                height: auto;
                                                border: 0;
                                              "
                                              title="Facebook"
                                              width="32"
                                          /></a>
                                        </td>
                                        <td style="padding: 0 5px 0 5px">
                                          <a
                                            href="https://www.pinterest.com/"
                                            target="_blank"
                                            ><img
                                              alt="Pinterest"
                                              height="auto"
                                              src="https://luminous-jelly-c11a45.netlify.app/images/pinterest2x.png"
                                              style="
                                                display: block;
                                                height: auto;
                                                border: 0;
                                              "
                                              title="Pinterest"
                                              width="32"
                                          /></a>
                                        </td>
                                        <td style="padding: 0 5px 0 5px">
                                          <a
                                            href="https://www.tiktok.com"
                                            target="_blank"
                                            ><img
                                              alt="TikTok"
                                              height="auto"
                                              src="https://luminous-jelly-c11a45.netlify.app/images/tiktok2x.png"
                                              style="
                                                display: block;
                                                height: auto;
                                                border: 0;
                                              "
                                              title="TikTok"
                                              width="32"
                                          /></a>
                                        </td>
                                      </tr>
                                    </table>
                                  </div>
                                </td>
                              </tr>
                            </table>
                            <table
                              border="0"
                              cellpadding="10"
                              cellspacing="0"
                              class="paragraph_block block-5"
                              role="presentation"
                              style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                                word-break: break-word;
                              "
                              width="100%"
                            >
                              <tr>
                                <td class="pad">
                                  <div
                                    style="
                                      color: #ffffff;
                                      direction: ltr;
                                      font-family: 'Helvetica Neue', Helvetica,
                                        Arial, sans-serif;
                                      font-size: 14px;
                                      font-weight: 400;
                                      letter-spacing: 0px;
                                      line-height: 120%;
                                      text-align: center;
                                      mso-line-height-alt: 16.8px;
                                    "
                                  >
                                    <p style="margin: 0">
                                      1234 Example Street<br />City, State
                                      01234, Country
                                    </p>
                                  </div>
                                </td>
                              </tr>
                            </table>

                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
          
          </td>
        </tr>
      </tbody>
    </table>
    <!-- End -->
  </body>
</html>`,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    res.status(200).json({
      success: true,
      message: "Your tour is booked",
      data: savedBooking,
    });
  } catch (err) {
    console.error("Error sending email:", err);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

// Get single booking
export const getBooking = async (req, res) => {
  const id = req.params.id;

  try {
    const book = await Bookings.findById(id);

    res.status(200).json({
      success: true,
      message: "successful",
      data: book,
    });
  } catch (err) {
    res.status(404).json({ success: false, message: "not found" });
  }
};

// Get all bookings
export const getAllBooking = async (req, res) => {
  try {
    const books = await Bookings.find();

    res.status(200).json({
      success: true,
      message: "successful",
      data: books,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};
