<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use Doctrine\Common\Collections\Collection;
use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\Common\Collections\ArrayCollection;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Component\Validator\Constraints as Assert;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;
use Symfony\Component\Serializer\Annotation\SerializedName;



/**
 * @ORM\Entity(repositoryClass="App\Repository\UserRepository")
 * @ApiResource(normalizationContext={"groups"={"user_read"}},
 *  itemOperations={
 *      "get",
 *      "delete",
 *      "put"={"route_name"="api_users_put"}
 *  }, collectionOperations={
 *      "get",
 *      "post"={"route_name"="api_users_post"}
 *  })
 * @UniqueEntity("email")
 * 
 *  
 */
class User implements UserInterface
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     * @groups({"user_read"})
     */
    private $id;
    /**
     * @ORM\Column(type="date", nullable=true)
     * @groups({"user_read"})
     */
    private $birthday;
    /**
     * @ORM\Column(type="string", length=60, nullable=true)
     * @groups({"user_read"})
     * @Assert\NotBlank(message="Le prénom est obligatoire")
     * @Assert\Length(min=3, minMessage="Le prénom doit faire entre 3 et 60 caractères", max=60, maxMessage="Le prénom doit faire entre 3 et 60 caractères")
     */
    private $firstname;

    /**
     * @ORM\Column(type="string", length=90)
     * @groups({"user_read"})
     * @Assert\NotBlank(message="Le nom est obligatoire")
     * @Assert\Length(min=3, minMessage="Le nom doit faire entre 3 et 90 caractères", max=90, maxMessage="Le nom doit faire entre 3 et 90 caractères")
     */
    private $lastname;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @groups({"user_read"})
     * @Assert\Image(
     *      minWidth="50",
     *      maxWidth="250",
     *      minWidth="La largeur de l'image est trop petite ({{width}}px). La largeur minimale attendue est de {{min_width}}px.",
     *      maxWidthMessage="La largeur de l'image est trop grande ({{width}}px). La largeur maximale autorisée est de {{max_width}} px.",
     *      minHeight="50",
     *      maxHeight="250",
     *      minHeight="La hauteur de l'image est trop petite ({{heigth}}px). La hauteur minimale attendue est de {{min_heigth}}px.",
     *      maxHeightMessage="La hauteur de l'image est trop grande ({{heigth}}px). La hauteur maximale autorisée est de {{max_heigth}} px.",
     *      mimeTypesMessage = "Uniquement .jpeg .png .jpg and .gif est valide"
     * )
     */
    private $picture;

    /**
     * @ORM\Column(type="string", length=255)
     * @groups({"user_read"})
     * @Assert\NotBlank(message="l'adresse est obligatoire")
     * @Assert\Length(max=255, maxMessage="le nombre de caractère maximal est dépassé")
     */
    private $address;

    /**
     * @ORM\Column(type="integer", length=10, nullable=true)
     * @groups({"user_read"})
     */
    private $phone_number;

    /**
     * @ORM\Column(type="string", length=35, nullable=true)
     * @groups({"user_read"})
     */
    private $license;

    /**
     * @ORM\Column(type="boolean")
     * @groups({"user_read"})
     */
    private $status;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Categorie", inversedBy="users")
     * @ORM\JoinColumn(nullable=true)
     * @groups("admin")
     */
    private $categorie;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Article", mappedBy="user")
     */
    private $article;
    /**
     * @ORM\Column(type="string", length=180, unique=true)
     * @groups({"user_read"})
     * @Assert\Email
     * @Assert\NotBlank(message="l'adresse est obligatoire")
     */
    private $email;

    /**
     * @ORM\Column(type="json")
     * @groups({"user_read"})
     */
    private $roles = [];

    /**
     * @var string The hashed password
     * @ORM\Column(type="string")
     */
    private $password;

    /**
     * @groups({"user_read"})
     * @SerializedName("password")
     */
    private $plainPassword;


    public function __construct()
    {
        $this->article = new ArrayCollection();
    }


    public function getId(): ?int
    {
        return $this->id;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): self
    {
        $this->email = $email;

        return $this;
    }

    /**
     * A visual identifier that represents this user.
     *
     * @see UserInterface
     */
    public function getUsername(): string
    {
        return (string) $this->email;
    }

    /**
     * @see UserInterface
     */
    public function getRoles(): array
    {
        $roles = $this->roles;
        // guarantee every user at least has ROLE_USER
        $roles[] = 'ROLE_USER';

        return array_unique($roles);
    }

    public function setRoles(array $roles): self
    {
        $this->roles = $roles;

        return $this;
    }

    /**
     * @see UserInterface
     */
    public function getPassword(): string
    {
        return (string) $this->password;
    }

    public function setPassword(string $password): self
    {
        $this->password = $password;

        return $this;
    }

    /**
     * @see UserInterface
     */
    public function getSalt()
    {
        // not needed when using the "bcrypt" algorithm in security.yaml
    }

    /**
     * @see UserInterface
     */
    public function eraseCredentials()
    {
        // If you store any temporary, sensitive data on the user, clear it here
        $this->plainPassword = null;
    }
    public function getFirstname(): ?string
    {
        return $this->firstname;
    }

    public function setFirstname(string $firstname): self
    {
        $this->firstname = $firstname;

        return $this;
    }

    public function getLastname(): ?string
    {
        return $this->lastname;
    }

    public function setLastname(string $lastname): self
    {
        $this->lastname = $lastname;

        return $this;
    }

    public function getPicture(): ?string
    {
        return $this->picture;
    }

    public function setPicture(?string $picture): self
    {
        $this->picture = $picture;

        return $this;
    }

    public function getAddress(): ?string
    {
        return $this->address;
    }

    public function setAddress(string $address): self
    {
        $this->address = $address;

        return $this;
    }

    public function getPhoneNumber(): ?int
    {
        return $this->phone_number;
    }

    public function setPhoneNumber(int $phone_number): self
    {
        $this->phone_number = $phone_number;

        return $this;
    }
    public function getLicense(): ?string
    {
        return $this->license;
    }

    public function setLicense(?string $license): self
    {
        $this->license = $license;

        return $this;
    }

    public function getStatus(): ?bool
    {
        return $this->status;
    }

    public function setStatus(bool $status): self
    {
        $this->status = $status;

        return $this;
    }

    public function getCategorie(): ?Categorie
    {
        return $this->categorie;
    }

    public function setCategorie(?Categorie $categorie): self
    {
        $this->categorie = $categorie;

        return $this;
    }
    /**
     * @return Collection|Article[]
     */
    public function getArticle(): Collection
    {
        return $this->article;
    }

    public function addArticle(Article $article): self
    {
        if (!$this->article->contains($article)) {
            $this->article[] = $article;
            $article->setUser($this);
        }

        return $this;
    }

    public function removeArticle(Article $article): self
    {
        if ($this->article->contains($article)) {
            $this->article->removeElement($article);
            // set the owning side to null (unless already changed)
            if ($article->getUser() === $this) {
                $article->setUser(null);
            }
        }

        return $this;
    }
    public function getBirthday(): ?\DateTimeInterface
    {
        return $this->birthday;
    }

    public function setBirthday(\DateTimeInterface $birthday): self
    {
        $this->birthday = $birthday;

        return $this;
    }
    public function getPlainPassword(): ?string
    {
        return $this->plainPassword;
    }
    public function setPlainPassword(string $plainPassword): self
    {
        $this->plainPassword = $plainPassword;
        return $this;
    }
}
