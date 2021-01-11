import React, { useEffect, useState } from "react";
import { db } from "../firebase";

export const dummyUsers = [
  {
    id: "jdog",
    name: "Jennifer Dog",
    role: "Member",
    photoUrl:
      "https://images.wagwalkingweb.com/media/daily_wag/name_guides/cartoon-dog-names/featured_dog/snoopy.jpg?auto=compress&fit=max"
  },
  {
    id: "theresamay",
    name: "Theresa May",
    role: "member",
    photoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Theresa_May_in_Tallin_crop.jpg/220px-Theresa_May_in_Tallin_crop.jpg"
  }
];
