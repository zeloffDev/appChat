import { useAppDispatch } from "@/store/Hook";
import { signOut } from "@/store/user/userSlice";
import { useNavigate } from "react-router-dom";

type Props = {};

export const Profile = (props: Props) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSignOut = () => {
    dispatch(signOut(null));
    navigate("/signin");
  };

  return (
    <div className="items-center w-full mr-auto ml-auto relative max-w-7xl md:px-12 lg:px-24">
      <div className="grid grid-cols-1">
        <div className="mt-4 mr-auto mb-4 ml-auto max-w-lg">
          <div className="flex flex-col items-center pt-6 pr-6 pb-6 pl-6">
            <img
              alt=""
              src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYVFRgWFhUYGBgaGhoaGhocGBgaGhoYGhoaGRoaGhwcIS4lHB4rIRoaJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHhISHjEhISs0NDQ0NDQ0NDQ0NDE0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDE0P//AABEIAOEA4AMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAADAAECBAUGBwj/xAA8EAACAQIEBAMHAwIFAwUAAAABAgADEQQSITEFQVFhcYGREyIyobHB8AZS0XLhByMzYsJCovEVFnOCsv/EABgBAAMBAQAAAAAAAAAAAAAAAAABAgME/8QAIREAAwEAAwEAAwEBAQAAAAAAAAECEQMSITEiQVFhMhP/2gAMAwEAAhEDEQA/APHI4EaISgJFYUCOBHlJFIaSJjSDRjHAj5pER7QAUmpEjaNaMCTPISVorQAcCPaISWU9I8AjaCqCG9nGZNIdQwr2kmMWWHFLSCkWFaKIi0UyYho0cxoASVrQyveV4hGqwNLUiRBpUhQwMrdHoMiNCESDCDQwUcRCEpiQiUEUSVolEnlmiRQMiRYS1RpXEjUpyuvgAFXYR1Emq8zGaGARtcx2WOgsYdBr5RpABWmTCJRHjDolyABck2A6mbbUaOF/1V9pVtc072RCeTkas3YaeMtSvrGYaYcnZSfAX+kG6239IfiHFnqaaKnJFGVR5CZpMyq1+gDA6mIHW0DJBpKsAbXhUfaOLHeOaQ5GaL1ahAqy84GXGobiVatPKZFp/RNEYxEdYfICJKnUGaVopN0tI2ktYIaODFaMYCJh4/tIOKPsx6KSVrSMUQi4kIGtA0GvLDJpNZ9KQWm/u/neM+shTG/h/EmFvNl6UBIuRGddZZSlf0/vIpT1h00MBCnYa+X8xI1tZZenr4Afb7mKjhS7Ki/EzKo8WIA+Zj6DwvcLq+zzV7X9mt1/+RvdT0uW/wDpMWvWLsSSSSb695rcdrqLUKX+nTO/Oo+xdvsOQmK0y5f4JkYo8aYMQoo8aAxwYWlvfpAw1BhqDz27GVH0BXIHjItY7w+KFrCCogat0t6matPcAHiKFjptJYcSwFuBfc3/AJgTTIldfdQsJmneV6lHpLQkWEmp0MKFoxlt6d5XenaZVOCwHFFFJEKKKPAQSi1jNNFuPKZImxg9VB7Tbh98KkhRXfwlihRJ2EJhcIWOugvOkvSpoAiDNcDM+pJPYaATpmSzHo4S1xYkkHbpzgamFubjUE7cxPQ+F8bp2X21ALYaVEF1F9ASCLqDMTE4NGdyilVJuOfXb1m8qWswpHLPQOptuw/5H+JPBArUVhoRc+djb0NputgSRqDob38DY+O/yixHDwozDlr17a6QcBhyGJp3YnvKrpNyvht5RrUZzXBOGbljWh3SCInPUiwhFHtCNSsqt+6/kQdvQg+cz6hgGOo1lrDYXMe3XpobfSRajYg8tD+fP0mihj6j4pSCBe9o1Bbq/gP/ANCGxjBrEdbd9tZAGwsAbmb9fQJ0xsO3/j6SZSDCZdTeTpvpr4jt2MMAiVkWWFFQRmETQFZhIkSwwgmEhoRWenAMJcIkGS8zqRNFaPGjzMkcTX4afdmQq3M2sMLLYbzbhXulSatBwPGQ9tnJvzOnYSpSDWP+71l2hh7WnbK0tGrQqO5yXO4FuQVRabGAwbWVSCefYa7AwODohfeXe9+9txOhwVPQTb4MWHwYAt9f55xVeFBsw/cLfLf7zTo05qJgSym29pldqfomeVY/AlCVIsRymDiqU9i/WXB1aiaoADoNf9y328RfTzHSeV1sKzuERSzMQqgbknQCTNq50DnK6RsLSOcIR8alRfqy3T/uy6zp6PAHpYnDrikZKdSooJupBFxpmUkDUi+t7EmdpX/wzVww9oFsSabBdQCblWGxXc9iTytbmtrRqTyTD0MyObbKG88yj6FvSdNw79M1Gq4aiyWWrlqAk6hXpjPcdNAe3mJ2nCP8NnVQtSsMrAZ1VTc2LGxYHX4jqDznoOB4PQo6pTRWtbMFGY6W1b4j5mKqmV56OuspZ6eH/pv9POyPVZQyI65ri4OUsu3NTc+Q1FjMn9SJ/nMf3WY+Jvc+t59EYTAU6aFFUBTckdb73+lumm08o/W/6bRcXTVHFnBLIb5kRMzFielrgX1056ma8fN2fXCu6c9cPPKNE3uQbENY+CnT6S1h8C+XQm/gNO2suVH9s4XRFNwmmgvtfx015QmBdkdgbEXJ0JIvfXWa9TNJt4jDxFF11bW/Pl4RIjMNFv35es2l4qqjKo1LfFppy0uNPGVOJYhw1iCCRcE9DpoOUxr6NprxmO+htvaHVxAtTkFQk2AkNsgslhINEtK3P+N/nHKwAEZEiSMYyWIp2kkpk7CWKOHvvNCkigaSJjfoKf6AoYTTvDUAQdZZSoBB1agvcTpUpFBhWsZfpV7jTeYqHMQOcv0DkIJINjaw6WN5vDGjocDWLWyn3ht3E6jh2LYWDrry6/3nKYDKlmJv08O06DCYoswsRbkbbEi3lNmvBnXYEqwJzZe50sfOa3CMSHDA2zKbG2x6ETlX4dXAtfPbWwNzYje0bhDlqhBuAgzPuNF5HxNh5zk5IVJvRNabH6vqk0KiKdAaeY/1FiR/2rOLqPRTHI6+7T9oBe+ykZS1+Q1J7S3+ouOZiyg6E3Pci9vS5mBhKJcCq+q52Cg8ygBY+Azr6wnj6R6VK/R0PGkoI5pu2ek4yuFN3R1ByuqjVXzcwNQSDe2nc8IxYakhzhzkW7WK5jlBuVOqkgg27zynEVTe45G4uAwHkRaMvGMSlT2qVTmsqlW1RlXQAqLBbdVsdec5qltG7jUeyGrHSpOC4X/iBRf3KwNFxoQfeS/Zhy8QJ02E41Qf4K1Nr9HQ/eZ9GZuDVesFFydBPKP10WbFswBQ+zC9D7wYm/ch9fG09KdFcfGQOoIvr3PwjwmVx/gK4hM6WzAaW2ZQAB9NJrwtTX5GdLDzTgXADWcswYU0BLEDcj/pBOl9/SOTRFNFsrPUBzIof3Be+Sy+8WFtWbp0Nz2/6bAXDvTY2KuwIvY5bBmPUaBtZyfEAgzBUVA7WbIouQTfc7gam22m2k6u3ZtfwS8Mfh+FovXCIuZybIBsSCdup5+AvOlX9ICrXSjiAyXRnQqUu2UgMobUDlcWO4nJovsHzI/vZ1UErY5WIuQc2h/gzqq36grlqblrsjMVuq399SDrbbbTbTsJjybuI0mN9DD9D4d6opKLPRZi6Fm/zqTao2YH3W1FyLC9xppbjv1ZwB8Iym4alUzGmw5gWNnH7gGH5oOo/wDcznHU6xVbpTKvlFs6ltA29zq9uQJkf1zxOnicNbIVZaqumoIBcEOt9DY3LX66aWmculQVP+HmznTTrLD07lQu7IrW7m+kJRwLurMq3VfiY6KPE/aPgEzV6WoN2pjTkLgWPlNH/pjpRZdbdIMyzj6ytVqMNmd2XwLEj5ESuRIYBEh1gACIVbxoNDqhMi1OOtSRZzNEBOktmVuQI+sJRos9yovr/eV1YWIO8uYM3RlB97MD4rbWaz/Bl6hitFVh8IsOR0mtg64J91yD30P95zWIrEAA73JOmvTX5yS1mFptNfopHe0eMV1a/tGzDkTfyIOlppcU/UAektgodh/mFRa5UsFHhY38+04vAY/OVDHUc+wBNvlKuJqOAQd+nOKoltV/AFxLGXJ1meeMVFVUDnKubKLAgZyC3LnlHpKOIxBJN5UZ5hyWmGmwOPvzCnyIMtUeMg/Eh8rN/EwsGgd7M2VbMSeyqWsP9xtYDqROn/R+KevW9nUe9IKS6E2QIou2VV0WwGlhobWkSk1rD/0pFfHVKbgOjDMviCR0136+vWWeEOM12I0BtfrymPj0VKzql8gY2v05SzhKs1lKXgVXb09K4DxGmhVnewAF9GJ+EX0AJ6zvcZikp0zUY+6FzePQDudPWeJ4SsTN7G8aepTSmx91FAA6kCwLdTbSRy8Pek0ThS4pxZ2d6gOQsCCF0FjbS3PbnMfFcUJA90Ejn1Oo2tLwpGo2VR4nkB1ksStKgOrczpf+35vvN2plYU2mctiEqPUXQhiQV3sLc7HYC150jrtztz8NILA4JmY1X0LCyr+1Trr3/PC69G9/zbectvaOjjnJ9KtOkMxbnYDyFzb5n1kOMPlCIoDEksQRfYWBt5n0ltKf58pz3EuIk1GCt7uijy316XvCPouZ4sJYj2lUBWJIGyjRfJRpK1fDewFz/qMCFW+qqRYsehOwHiYKvnTXWx1uLyniMRp3Mu/xOTCpVQ7yWXQeEkjAyapcDwmAweaFVjAqYVY5AmsdpEmOJaASppf83ksRTKEeoI8N4g1hYiaPC8K9YhER37ADQc7t/wBI7mWkmMyUJLC95u8M4NVxAuosi/E7e6g8zv4C82q2AwWG96sFqVAbikhORTyDvu3h8jMXjP6nerZdFRdFpqMqKOgAh2U/WGlx2o4fSmxd+dQ6KP6F+8w8bxE301J1Mz6uKY85XJmd8/6QaTqVCxJO8jGvFOerbEKHweKemwdGysOen0OhHYyvD4ZGY+6P485UU0/A026bNXpVHZBmTKwdUCXu6rlIQBTve9r+6YPC0zz0l2jVy0snPNm8bgDby+Z8gAzr0Oxo4Z7CWcOxb7TOw1UAjMLjpe06Xh1dEVKgC3BNwQGFxY6g+Pyl98DsQzOiFVAUndje/bnOfxWHLHRyzn4QARrvfXlznS43E+0LsNSxLEDub7TmK2MKPmXQjT+xhT2Ql++nQAlbA8ha/W0hWr6WEpUcd7RFfmb3HcaSL1ZzHdL8K3FeKZBlHxEeg6zAYg62PlrLPHEOYPyIt56mZ1OvaOaw5uRt0XF4iCpUjYWEz3969uXcfhkAQD9pfw5QjUCOqdfTIz0BEtohsJayqOQkGeQpwCiBrCiQSTRtY0AaolrW6SNoxa9o7CaMCVGjndU5swHhc2ufCb2N4+UT2OH/AMukNPd0Z7aZnbe5mJgTZy37VY+ZGUfMiVcQ0i6cz4VuIhXxBJ3lctETGnK6bZIrxRTSwfDs1J6zkhFIUWAJZyL2FyAABYk8rr1jmXT8AzYbD0C3I2FsxCk5QTa5kMml9OXPXW/Lnt8x1mt+nMM9RyqMygDO1myk5Q1tRrszacxftKiU6xgAw3DGY+/oASNwb26Hp3mtTw4UWAtLLJY2kXIAuTa03UKfhOgyAFItrca9AL3HzHpM3E40JoNT8h4/xBY7iRbRNB15nw6D5zMkVyr4hpFpazsSddBc25C4Hpcj1mmnE7IqhmbctmAFiQui2JvsdTbfYTGo1QM11BupHgTsR4HWDzRLkxFHQHixWxUkGFfjSVRlrpryqKLMP6hzH5ac9SQsbDxPYDcxqj66bDb+ZS5mkI6HhlTLnQ8jcd+Vx20HrLjPMThlT30PUFD5C4+QX0mwxj3fTp468wq8YW9O/wC0g/b7zn2nTVFzKV6gj1nLm40PKSyOVe6Bc6yxhKpvaV6gkUaxvI7ZRh+zcKG0i0hhsVmFjCst5toFJRJCRWTK2OsAJCItJDaQEBh6BsjnrlHzzf8AGU8QdTLbaUx3Yn0AH3Mo1muZnyPzAYKKKNMAHnS8E4pTGGq4eqDla7owvpUVHygjo17eh5TmoUVvcKdWDegI+5mnHfVgQ59p0vAFKJnW4LHMNdQNhr4a+c5kKTt+GdetkXewUW8gJfH7ToVBlrKl2faxv6W079JzvHMSxqOmyoxW3XKSL/m0Fi+Il3BtdFNwp2Nv3AddvCU6tQuxZjckkk9STcwvkTWISRCIRRCYFD3iAvGIlvCkIPaG2bZB35sew+sMBBMVamvsx8ZsXO9uiDw595Qjlrm51jQbAs4GtlYX2upv0sf4JnSNOSEsPjXOmc6aaafSazWIuX1OizgbmYeMRS7WNwTfQ333+d5SZydSb+MmjQ7aFXo+Io2EqWmm+qny+sp1VFo6nVpmx8IdbTSqOQoEx0cjaWVxNxrHNLMYkODJgwQhBGhh6Q+kJh6WY2gaZl7h1JmdQu5P5eaytGB4iuUqh5L9STM4y7xermquQbjNYEbaaaekpqL/AJzmFPaYmDtGtHaJefhMgGijRRDNTAVkKomQZ/aq3tMzXCAfBl2tfW+8XFOIBwFXbc+ug+/pM+g+VlPQg+V9Yzpbp4g3mj5G5wRCIRRxMxjSQjkRKY8xgPUGv5zkWMJUGq9Nvz1g23g0A0Yx40QxCEy3g4ZNpU++CYIySGJ6ZGpBt15GRBhmE6W1Puny+sCy6RI2h8vrJgTafUMosLGMYbEJz6wMxpYxMvbwyUPdJ6SCiHQaTolDHpJLeZkR2XTTLf8Aq0MWGQGw5n0j8X91MnO9zbtoPqZo8mWxmGzRUnsbwZklE4luiJ1AL/nPWRy84V6d2vsLanoLQbvfwGwjr6MjFGhEfUA7Xk/QIRRzFp3+sGgGikgB1Pp/BjZe4+f8QwB1aTpJckeYkMnceoiUlSD940/6BJVswVtrwbHWEatfkINt46zPAHA7xFD4+EaNaTghEQiNpGCk85FkI5Sl4AVH5XIO3UEdxBOe1vpEjWMjW3zcj9ekpvwTYbDDMSO33j1AR1h+A08zsD+37zTrcN1N+fSXHwEYd81hK9RbEiav/ppubGU8XhHXUg2hUtoGWFMIrQKmTUzRMZcpVQNZTxOKDFiNrACRx7WUDmZQW/KZ8tv/AJFo66mGzBRpqeZ6dh1PeCJtoPX85SMx3AQXNpbv/EjJOlrDnuR47fL6yMTKFHWNHEaEKKO28jBoBRRRRDFHjRW0gA7SQW/OQivGIUV5NxcZvI+P99/WCJiwTCpUllHUjlM9nkC0pVgaWsQoGoMr5pHMY0TYGtwFCztYke7uPGa1S6m+Yt2JmLwOplZjcj3eXjLlfFkG+4M1h/iCHXGOG0UfOPjMSzi2UD53hiysAe0AyDrNpbwooBoVXlcGEEyTEV8W128hB5tLR8T8RkJjXrEODD0yFFzq3Ich3PXsPwhXTxiEWDJXubmPaJPtHEpIBhJRdfD+IxlYMRjRXjSWA8UUa8TQhR+0YRyYsARkY0eGgTptyOx3+xg6ylTY7yQW5A6m3rpOi4/gFYBlADKAP6gBoD3lqW08EctFFaPIAa0RiJjQAu8NezHwl2owI2EzMK1ifCT9oZrFYvQRfFUAWgnxcqNUg7ynf8DSyISnFFEhlTE/EfzlIpvFFMX9AX59Y8UUf7AkseKKUgJt9vtINuIooANEd4oomA0Y/nrFFJAknOREUUbAf+Y6bxRRAPR+Nf6h9Z1nENvOPFOjj+MSOPxPxt4wRiinOwGiiigAWhufCSeKKWvgEDHWKKL9iP/Z"
              className="flex-shrink-0 object-cover object-center btn- flex w-16 h-16 mr-auto -mb-8 ml-auto rounded-full shadow-xl"
            />
            <p className="mt-8 text-2xl font-semibold leading-none  tracking-tighter lg:text-3xl">
              Zeloff
            </p>
            <p className="mt-3 text-base leading-relaxed text-center ">
              I am a fullstack software developer with ReactJS for frontend and
              NodeJS for backend
            </p>
            <div className="w-full mt-6">
              <button
                onClick={handleSignOut}
                className="flex text-center items-center text-white justify-center w-full pt-4 pr-10 pb-4 pl-10 text-base
              font-medium  bg-indigo-600 rounded-xl transition duration-500 ease-in-out transform
              hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Đăng xuất
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
