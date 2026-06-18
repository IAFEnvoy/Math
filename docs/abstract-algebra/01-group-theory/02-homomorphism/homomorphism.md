---
sidebar_position: 2
---

# 群同态

## 定义

设 $(G, \cdot)$ 和 $(H, *)$ 为两个群。映射 $\varphi: G \to H$ 若满足：

$$\varphi(a \cdot b) = \varphi(a) * \varphi(b), \quad \forall a, b \in G$$

则称 $\varphi$ 为从 $G$ 到 $H$ 的一个**群同态**（Group Homomorphism）。

## 同态的类型

| 类型 | 条件 | 记号 |
|---|---|---|
| 单同态 | $\varphi$ 为单射 | $G \hookrightarrow H$ |
| 满同态 | $\varphi$ 为满射 | $G \twoheadrightarrow H$ |
| 同构 | $\varphi$ 为双射 | $G \cong H$ |
| 自同态 | $G = H$ | $\operatorname{End}(G)$ |
| 自同构 | $G = H$ 且为双射 | $\operatorname{Aut}(G)$ |

## 核与像

### 核（Kernel）

$$\ker \varphi = \{g \in G \mid \varphi(g) = e_H\}$$

### 像（Image）

$$\operatorname{im} \varphi = \{\varphi(g) \mid g \in G\}$$

## 核与像的性质

1. **$\ker \varphi \trianglelefteq G$**：核必为正规子群
2. **$\operatorname{im} \varphi \leqslant H$**：像必为子群
3. **$\varphi$ 为单同态 $\iff \ker \varphi = \{e_G\}$**
4. **$\varphi$ 为满同态 $\iff \operatorname{im} \varphi = H$**

## 同态的基本性质

设 $\varphi: G \to H$ 为群同态，则：

1. **保单位元**：$\varphi(e_G) = e_H$
2. **保逆元**：$\varphi(g^{-1}) = (\varphi(g))^{-1}$
3. **保幂**：$\varphi(g^n) = (\varphi(g))^n$
4. **保阶（整除关系）**：$|\varphi(g)|$ 整除 $|g|$
5. **子群的像**：若 $K \leqslant G$，则 $\varphi(K) \leqslant H$
6. **子群的原像**：若 $L \leqslant H$，则 $\varphi^{-1}(L) \leqslant G$
7. **正规子群的原像**：若 $L \trianglelefteq H$，则 $\varphi^{-1}(L) \trianglelefteq G$

## 常见例子

| 同态 | 定义 | 核 |
|---|---|---|
| 平凡同态 | $\varphi(g) = e_H$ | $G$ |
| 行列式 | $\det: GL_n(\mathbb{R}) \to \mathbb{R}^*$ | $SL_n(\mathbb{R})$ |
| 符号同态 | $\operatorname{sgn}: S_n \to \{\pm 1\}$ | $A_n$ |
| 指数映射 | $\exp: \mathbb{R} \to \mathbb{R}^+$ | $\{0\}$ |
| 模 $n$ 投影 | $\mathbb{Z} \to \mathbb{Z}_n$ | $n\mathbb{Z}$ |

## 同态的合成

若 $\varphi: G \to H$ 和 $\psi: H \to K$ 均为群同态，则 $\psi \circ \varphi: G \to K$ 也是群同态。
