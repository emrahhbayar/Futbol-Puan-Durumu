import React from 'react'
import { Routes, Route } from 'react-router';
import PuanDurumu from '../pages/PuanDurumu';
import CanliSonuclar from '../pages/CanliSonuclar';
import GolKralligi from '../pages/GolKralligi';

function Router() {
    return (
        <>
            <Routes>
                <Route path="/" element={<PuanDurumu />} />
                <Route path="/canlisonuclar" element={<CanliSonuclar />} />
                <Route path="/golkralligi" element={<GolKralligi />} />
            </Routes>
        </>
    )
}

export default Router