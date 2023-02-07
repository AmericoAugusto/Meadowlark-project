import React, { useState, useEffect} from "react";

function NotifyWhenInSeason ({ sku }) {
    return (
        <>
        <i>Notify me when this vacation is in season:</i>
        <input type="email" placeholder="(your email)" />
        <button>OK</button>
        </>
    )
}