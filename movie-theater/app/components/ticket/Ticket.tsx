import React from "react";
import "./Ticket.css"

export interface TicketProps {
  eventName: string;
  eventDate: string;
  eventTime: string;
  venue: string;
  attendeeName: string;
  sector: string;
  row: string;
  seat: string;
  ticketId: string;
  qrCodeUrl: string;
}

export const Ticket: React.FC<TicketProps> = ({
  eventName,
  eventDate,
  eventTime,
  venue,
  attendeeName,
  sector,
  row,
  seat,
  ticketId,
  qrCodeUrl,
}) => {
  return (
    <div className="ticket">
      <div className="header">
        <span className="badge">INGRESSO DIGITAL</span>
        <h2>{eventName}</h2>
      </div>

      <div className="body">
        <div className="details">
          <div className="field">
            <label>Participante</label>
            <strong>{attendeeName}</strong>
          </div>

          <div className="grid">
            <div className="field">
              <label>Data</label>
              <strong>{eventDate}</strong>
            </div>

            <div className="field">
              <label>Horário</label>
              <strong>{eventTime}</strong>
            </div>

            <div className="field">
              <label>Setor</label>
              <strong>{sector}</strong>
            </div>

            <div className="field">
              <label>Fila</label>
              <strong>{row}</strong>
            </div>

            <div className="field">
              <label>Assento</label>
              <strong>{seat}</strong>
            </div>
          </div>

          <div className="field">
            <label>Local</label>
            <strong>{venue}</strong>
          </div>
        </div>

        <div className="divider" />

        <div className="qr">
          <img src={qrCodeUrl} alt="QR Code do ingresso" />

          <span>ID: {ticketId}</span>
        </div>
      </div>
    </div>
  );
};