import "./Topbar.css";
const Topbar = () => {
  return (
    <div className="top">
      <div className="topIcon topLeft">
        <i className="topIcon fa-brands fa-facebook"></i>
        <i className="topIcon fa-brands fa-pinterest"></i>
        <i className="topIcon fa-brands fa-x-twitter"></i>
        <i className="topIcon fa-brands fa-square-instagram"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="toplistItem">Home</li>
          <li className="toplistItem">About</li>
          <li className="toplistItem">Contact</li>
          <li className="toplistItem">Write</li>
          <li className="toplistItem">Logout</li>
        </ul>
      </div>
      <div className="topRight">
        <img
          src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWFRgWFRUZGBgaGhocGhwcGBohJB4hIx4aIRkaGh4cIS4lHCMrHxkcJjgmLC80NTU2HCU7QDszPy40NTEBDAwMEA8QHxISHz0rJSs2OjQ9PTYxNDQ0NDc0PT00NDc2NDQ0NDQ0NDQ0NDc0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAgIDAQAAAAAAAAAAAAAABQYEBwECAwj/xABBEAACAQIDBQUGAwUIAQUAAAABAgADEQQSIQUGMUFRIjJhcYEHE5GhscFCctEUI1KC8DM0c5KisuHx0hVDU2Jj/8QAGgEBAAMBAQEAAAAAAAAAAAAAAAIDBAEFBv/EAC0RAAICAQMDAwIFBQAAAAAAAAABAgMREiExBEFRIjIzE3EjQlJhgTSRsdHx/9oADAMBAAIRAxEAPwDc0REAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBESG2/vHhsGhevVVdNFuCzdAq8TAJmRu1Ns0MOB76qlPNe2ZgCbcSAek0dvb7V8RiAaeHBw6X7wY5yOhI4a34ShYnH1KhvUdnOpuzE8ePGAfUNDe3BOMwxNMC+l2A8L68BcEa9JMUcQjqGRlZW1Uggg+RHGfILOTzP9f8TKoY+qgULUcBSCoDGwIuQRrb/uAfXcT503c9puMw+VHf31MWsrgFraDKGGtrDn1m5N198sPjQAjWqEElDflxsbai1j6wCzxEQBERAEREAREQBERAEREAREQBERAEREAREQBOJzNU+1H2gGgXwWHHbKAPUDapmBuoUjjlIOa+l4Bkb8e1BMOWo4QCrVtYvcFFN9Rp3iPhNJbW2pUxFRqlVy7sbkk39B0A5DlMMsTYC/Tr6S0bE3QZ7NW7C8l/EfP+GRbS3ZKMXJ4RW8LhHqNlRSx8BeWDCbmYhrElV8CTf10mwNm7Lp0wAihRJZaYmedz7GuHTr825run7P3/8AlX/KfWedfcHEDusjedx9ptKkgnt7kGV/Vn5LXRX4NCY/Z1Wg1qiMvIG2h/KeBnfZG0noVUqU2KsjX42B6g9QRcTdW0NlLUUqyh1PEETWe8u57UyXoAlOa3JI6lSe8PDjLYXJ7PYz2dPhZjujde5W+NLH0lJKpXGj0789dUvqykC/1lrnyNgcW1N1qIxV0IZWHEEHkeX/AHPoXcbfunj7oUNOqigsCwKsbkHIeJtYGxA73hNCZlLrEROgREQBERAEREAREQBERAEREAREQBERAIvb+2aWFoNWquqAA5bnvNYlVHUm0+V9p458RWetUOZ3bMfsPQWHpNme3Xa+atSwwJsi52GtiW4edgPnNW4WmWYDlzgFn3S2eAfesATwW/Lx85dBUlf2amSmoHnJrDG46zNZLubaY7YM6hVknRaRNNDJHDIbTNJmtIkqMykEwaQMzk6yGTjR6FBI7G0QRYzNdzMOpc6zjkIrc1vvju0ADXpjUauv8Q5sOhA49ZCbo7UGGxVKrchAe1a3px4agXm1MVTFiCPMTUu39me5qsg7p7S+Rvp/XhNfT259LMnVUpepH1LSqBlVhqGAI8iLiesoPsi217/ArSN81ABCT01y/ACX6azGIiIAiIgCIiAIiIAiIgCIiAIiIAiIgHzV7WMS77SrZwVyBVVbg2UDsnT+K+br2pC7BoXNyL3kj7SsU1XaWILAgqwQC1u6ANPAm5F+s77DThpwF/hpaRk8InBZZN8AABwFpn7OU2mCbDUnTjPBtvBOyijz/QTLJNrCNkZKPJbcKtzqJKJT5zXA3ixXBKTm2gOUi/xEzsFvTiVYB6FTXSwRj0tqB5yt0yxnBNXxzgvi+Ey0aVjCbbV7EAi/UEW87yT/APUAoJJtKHku5RMAXnm48JWa++VFDbU9TcC3XjM3Bb00avK3Q38Rp8xO6JYyQ1rOD02jxlL3wweZM/Ndb35cx9/SXPEuri6nhx6yE2mLow66fERBuM0yyaUoYJD2F1VNPEKB2gyXPUWOXy4mbYmnvYbQYPi2uco92pF9M13ubdbAazcM9VcHjCIidAiIgCIiAIiIAiIgCIiAIiIAiIgHzF7RKbLtXE5hr7wNwtoVUr8razI2Ibhj4gf8yQ9r9AjapsDd6dNh46Fb/wCk/CVvC7SWkWVkzgrYAMVIa6kG4BIFgR/Ny4yElnYnB6dyw7Sc5coNr8T0HE/ISNw1QDXuDrcXI8T9hp5yJfGMFW2ZQGdmGYi+a2UDXUAADWQ9Sox4k/GIxSOym2X+hiMMwN3QnwIJ9OsxMTtqlRKlAWN1NxcWHO3CzdJSVYjhMt8RmUhu8LZSPof1kt0zjaa3LhgNt0q9ZEWkyuxCh82tyR31UdoWB1vceUtG0MFemxpVASqlmKPfKALknKdABNZbt4Y1MTSQW1dSb8LKcxv6KfjNr71F1oEBFCvTdSVuDfKbWtw+/CZLktSNnTt6GULCbWRbM9aozCxHOx5aMLcRJvZO38LYXRg1tbKlgfDhf4TXuKUA3U3B1vOlPFMvAzRpytjLqSe5s6vvVRRhagzDndgh8LFLg+RE6U9sU66uFurAXyva9v4hbRreHwmvVxhY2bSZVOtlZDe2VlJJuQBftcNbWJvaUypT55Lo2tccG3fYsSDjVsbe9RgbaahvnpNpzWPscr0yMWiVUdveI3ZRl7OUBSMyg2uCLEaEHrc7OmmPBllyzmIidOCIiAIiIAiIgCIiAIiIAiIgCInBEA+d989rpj8VUqKSjU700PVFLWPrdj1F5h7GwCqjDicxuevSR1LC5HrBzlKPa/QjNeTOzGIQBhY8x+socmalFIxNtYINSbL3lF/hqR8Lyo1KZBIIsRoQeIPQ9JesSQbjkZC7VwT1GNTtM7d4kXLaWufQcZ2M0tiM4N7orgWc2mf+wuPwN/lP6SX2Ds9EqlsQpyoAcp5txGYdNL2Mk5ojGqTeCd9nmxSG98wsbWTwB4n15eHnNh7SwXvKLU24EaHoeRmvm3tQ1AtI5Rf4+ssj73UxSuzgWI0J4nwHOYbdbllo31aVHCeyNSbQwDU3ZGFirEeo4zEGHM2VvTgaNZVxNNgQ9la2vaykq2ngtj6SBOx2KO6ZGC5brmAfU27Knv8A8vwmqFuUZbacPK4IrA4JSmbiRxBH06ida1IGw6kC3nPaqKi92m4A6ow8wSRwk1sPdxn/AHle6j8K8z4noIlJR3bOxg5LSkWf2KYdlrVHBK0nVkW/42Ug5hpplW448z0m6Jprd/F1ztPD0Qvu6NNcwQDipVlBa3jym5ZZXLUslFsNEsHMREsKhERAEREAREQBERAEREAREQBERAPnjf3Ae5xuKVdAWWoP5wD8mJmBg65YEnQ8T95sn2m7MUVqeI/iQoel1OYX6kg6flmuC6lyFIJFr+v/AEZnkt2jVHeKZ6O15lYFhftSPZrT0pPYyiW5fFlvOJCJcAX4DTnKhtbCOxLqwueN+fjJilVzLx4SPxGNTXtjKDYnl5DqZytYJTkmiDwWwXY2UAnw/UyzVNwS1K/vQ1UfhIsvkCNQfGdNn7UVLFEVh4uQT6AaGWbBbVDC4TvDUhwSOXdIFx6yU5zzsRhXHBH7sbs1FpuldSicVGYEhv4tL/1ecbQ3aqJqhDjpwPwOnzlpw2OVl0YEXt69D0M9Kr6TPKck8mmKTWCibN2a5qB2UqqXOotc8AAPX5SdrGymZWJa0jqjFiF6kD4ytycnuTSUVhE3upRDY1XGv7u2a1rgFiPpNkyrbp4dc7uOSoo8tdfC9pap6fTLEDy+qlqs+xzERLzMIiIAiIgCIiAIiIAiIgCIiAIiIBj4rCpUUpURXU8VZQwPmDpKZv8AbFo08A3uKKUwjo9kRV4nKT2R0b5S9SP25hBVw9amRfNTcDzscvztIyWUSi8M+eWcETqrW0mKXsb9Z3VwZlcTYpDE4ogECR2HwpYj3j5VvyF5m1eM8HBMnFpEJLLLds3dXCut1r1CQNSHT6ZZJYLc+lewxdQdO0oA/wBPnNdU8fVpm6NY+H9WMyk3jxJ0DG/gB+k44t9y+NsEsY3+xdsZsSvQZmw2IFQ5TmR7dq1+BGhbpe3nMzZO1XdP3iMji4IbwkBsSpWYg1GNunD48zJ6q9zcTLY1wXQTzqMus9554LZtWs2Sgyioq5xmvbskWBIGlyQLzwFcAXMtvs7wxIq1z+Jgi+S6sw8ywH8kjTDVJLsc6izRHK5JbdPB1kRmrrkZiOzdTa19bqSNb9ZYYiepGKisI8qUnJts5iIkiIiIgCIiAIiIAiIgCIiAIiIAiIgCImJtDGLRpvUc2VASfsPMnT1gHzZvLh/d4msg0CVXUeQY2+VpHiqeszNvY79oq1K+XKXd2K3vlJJ7N+dpCtUlLiXqWCVFQHznoqDhpIOpUOlp608V1NtDbzsbfPT1nNHg6p+S04LZVNtXJt4cZbdm7OwYHZRb/wAR4/Gaxp7UYDU8ZlYTbbpre9uplM65vuaIXQRszEYZB3bTAr1VXnr0lZTeM21uT1uOMjTtFmYa6A38yOHnxlKpl3LHfHsW/D03r1Eo0tWc2/KPxM3go1M3NszALQpJSTuooFzxPUnxJuT5yp+zHYvu8P8AtDi9Wtc3P4Vvoo8yLn06S8zZTWoLPkw3Wubx4OYiJeUiIiAIiIAiIgCIiAIiIAiIgCInEARPKpWVdWYDzIkXjd4aVPkWNr6WHMD8RHMiRcktmwd9t7eoYRVau4XNoo1JJHHQAmw6+M1Didt4naGIai1a9JmYhQmVAinRrHtOeBAYnXpysm8WHrY5szU1FNSRTGezBeBYFQb3te2nLjYSEwtBcEzCo5tUA92xGl1DaX4HvDofDnKfqqWUnwdmnFL9yu7y7CFDtoWZL5XzWNjwV9ALA6C3lKviaF9ZesdtgVSyAdgrlbhr1t4kj6Sn16eVmT+E28xyv6ESWpN4SJV5xhkOykTrMyok8Csnk64nleej1Bc5RbXQXvYdL85yFnrTw+YgAXJ5TmV3CizzU68bj4Sybu7KLEMRpcZB1PX9Jl7C3ZuVaotzxC9PFv0l62Nh1/aKKtYDMPLTUD4gTNZcpPTE1QpcY6pGzsBhhTpog4Iqr8BaZETmbEYREROgREQBERAEREAREQDidSbceE7Eyobe2m1Wk/ux2O6vV9Rdvy8bDnx6SuyxQWWdSyyUrbw0hly3YMSobgtwbHW3W44cp0G16lwMqdrugNrztx0PCY2E2ehohOItfXkevxvMXH4S9E03ub2yso1Q6kNproQDPOu6meVpeEyccJtYyS37WzXBZ1/LlsPXLODT0ANRybc2Nz9jKdutvJUq1XwtcfvqFzppnUWAe3XUE+YlrqrmUXBsCCepsb2HmQJRbK1PEmWbdtjmrgwVtc/za/eUfbmwKpqZqTmwubMrA3vxGW+lzx6y+0azMBmUBrXIvw/5tOzqGFz5X5iaNFlcVLn/AEVKcXLDKHsrZzKhVw4dLghi7XUklGVVa1rXFgL3Uyv7yYd6j6szABjlY6rYX1T8BIvYd7rxtNi7WpsgVlfIBoxAHaXX4EHW/Qt1mIhOjAI6Ekllt2rixvxlTslCzOzz4LoVKxZXPhmvtkbvvmuVOU8xbw8Db4ePCYm+OwHostUao3ZOmqnlfkQeom1cDgACqgG2WwPUA6eoJHznrtXZS1qL0WUHOpAPjyPmDaTd1mrVjbhkEkpYPnyol5isksW19jPh6jU3Go1DW0YcmAmD+yk8BczbGaayizQ2RYpmWjYGyCCHY2PIAXt4z02XsYizuvkDw9ZY8MtuUotuzsjTTRjeRm4OiB19ZF704soiMrEN72nYg63DZtPRZNJot5UN+2Io02//AFB/0taVUrM0XXvEGzf+DrZlB8B/xMkSjezjaVSthkq1WJzXUXtyNh9OMvM31Sclut0eRJJPY5iIlxEREQBERAEREAREQCE29WBAok2zgltbdkEdn+Y39A0wqbBQDlGUAW/6Ex8HiP2hqlfihJVPFF0zeFzcjwPiZnrRt2dCLDlPE6q6U5PHCNMK4reRgVtpe7ZBpYm3T8tj4iZj4pWsGFmvqP0PlMPa2yBUR15EcOh4gqPPWU3D7zGl+5xVyVuoqLfQj8Lczw0bwnK7HOKg98E51wwpRPXffZ7KyY/BvlrUdHUEdpOnjxIIPI+Eu2wdoriKCVqbZldQTwup4MDbmCCLSHpomJ10Gdeyyfi4A5x11v1mJssJga9lc+4rtlZXAGSqAe1pYAOB/mHjLpy/D09yr6be6LXWpi5Njr53P3nYHWx/oTILXGlpiY5CVzL3l1HjblL+jjJRbbymZ7PB54pAFOc3Qjh95WMRu5hcRhyELCxazoSpOpNtNGtw1v8AGS42srqQy5ka4tfXowMqO2dpfs9VEUZaD9lVXTJcjNa3ME38jMrr/EbTNtfTzwsrBCYv2fYzMrYfEZkOl2rMCh53sOljprLfuBg8fSetTxtUuiBBTJYPdjckh+9ovEHqOk9tmvkOZNbnMLm4NwNeXT5S0bOTsA6jMWfU8MxJAv4KQPSaq7nP0vgr6ih17vuYe19iUsSmR15aMOKniCPlpKPS3XNJ2V7NY6EcxyI/SbMykEDkRxHUcPl9Jh4rBZmPQqCD0I0+h+U85uVUnFcZLaLUn6ipvhRa1pj/ALIQeB+Emq+HKsVbiJ5lZaj0VJNZRF1KZAtbjKx7QKIGHpBtAay3txtle9vjLw9IGQe8OyTXfDLbRcQhb8tiT/t+ctqkozTZXctUGkSu4OGejhwEvkYFlDizKTyJBIOlukvNPaaBVZzlDAanQDTgehmBhFAW2UC5PDhOaqIQ1NrFXB7JOpB429fheddk1+JW8r/B5rUW8NYZM0cUj911byYGe813htkvg3rOjXRguUE3NwOLCwA5Sy4DbHZQMblhfpf8s11dQ5vDRTKKj3LBE86dQMLiek1ERERAEREAREQCp7q2/Z6YA093T1tobqCQPj85l4Kvn1taxIt5EgH5TnZdhTTSwCDTpcCw+U5wrdtvOfPNqWF5Nb5bPe3HxtKJvPu+mIdxbK9zlYc+gPWbBYSs0nDVCxHFiR5a2+ok3F1vPcu6b1ZytsGvNz9vPgqj4arouY5SeT3Chfym9/Txl8x+z1xVNwAQWAzLfUMNVdCdQQdZG7y7CoH9+f7VQDqdAAO9YcWGtpKbpY5KyEWyup7xNmYcmFzcjl00lrvi1qS/6U50SbRlbpbRapRCVGvWpkpVuADmHMgdRY+szK+KdKlj3PLhwuZCbaV8NikxK60qmVK1uTcEqEcr8LycxdWxDEXB5/14TRfOX0k6/wCcFdGl2NSXPBXkQCvVQd1iHXwvx+ZPwnXGYFXBVlGnA24HwnntSrkq03HAEr/Ke7r4G/xkvcEXFu1r6zz1Jo9nLikVvAVjRf3L91tFPQnl5GWTZ22mQrSrL2e6tVeGnAOnFDb8QuD4SH25gRUpm3EAkW5jnOd08b75VzaujZWI8jlJ9OEmn6WQ6qMZx1NF2UXsQ2h4WtYzsTaRtvdDPTXS96iDn1ZOjDjbgfOZ6FWAZTcHpLqbYSadj4/Y8WcWvaYe0sPnXMO8vzHOQcteW0gNo4fI+nA6j7iSusg5+jujZ0k2lpl/BiAziimavRU8MzMf5UP3YTtlmZsehesGP4Eb/Uy/+MqaysGqyWINk2UkLtvYVPGIiuzI1N8yOhysCDZgCOTAa+nSTtUgXJ4DWRGzaxzHMNHZmXz6eo+kl0uK7HF9zzXFyg5LsdTs1VoPSQsewV7Tsx4HW7EkmV/A12rYYaEVcObcLGy6A/AD4S1tX1uBzKnQ8utph4imiMKgsoY9v/7XFvpb4TVRKzL/AE5KLIb47kdhtt1GXOGtYtoOAIOoPX/mTeA3gDKua2Y8jp8CdDKsAlLEGmT2HGl/4rkKfUC3nae5pBLBuFyG+oImWd0ozbTZ68aK7IJNYeC7Udp02/EFPQkfY2mYjgjQgjwMoYp5eOtukk93saFYg8HOovwPK3zmmrq23iX9zNf0igsxeS2xOqsCLidp6BhEREAgNn9wfkT6GdcN3zET5qPuibP1Gdiu435T9JVcF3h/XScxNfUcl/R+2R41O+PM/UzD3R/vL/kH3nMSh+1Gewsm9P8Ac8R/htOr/wB39F+0RN9Hwsph8sCqbY4L+dZL7O7i+n3iJhlwe7Pg7ty82+0gNxP7TF+dL/c04id/Kyi74y+VfxeY+k8Nh/8Av/4p/wBqxEor5PNlwSJ4yM21wTzM5iWv3ol0/vRFyS2H33/Kv1aImjujXf8AGySx/cPp9RIqlxp/4n3iJW/nRkh8bMrD91/zP9ZhbQ7ieZ+hiJ6b+Aqj/UIpu+H95o/yf71lj233PT/xiJ5lnCPXq5Ry3Ly+0xtn/wBqv+Iv1nETi4Yt+Nl/wfd9ZkRE9qv2L7Hhvk5iIlhw/9k="
          alt=""
          className="topImg"
        />
        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
};

export default Topbar;