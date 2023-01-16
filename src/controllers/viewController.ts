import { Request, Response } from "express";

exports.getHome = (req: Request, res: Response) => {
  res.status(200).render("base", {
    page: "home",
    js: true,
  });
};

exports.getAuthForm = (req: Request, res: Response) => {
  res.status(200).render("base", {
    page: "auth",
  });
};

exports.getPackageHistory = (req: Request, res: Response) => {
  res.status(200).render("base", {
    page: "package_history",
  });
};

exports.getPersonalInfo = (req: Request, res: Response) => {
  res.status(200).render("base", {
    page: "personal_info",
    js: true,
  });
};

exports.getPrices = (req: Request, res: Response) => {
  res.status(200).render("base", {
    page: "prices",
  });
};

exports.getShipment = (req: Request, res: Response) => {
  res.status(200).render("base", {
    page: "shipment",
  });
};
